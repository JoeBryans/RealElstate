import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UserModel from "../models/userModle.js";
import { Errors } from "../utils/error.js";

dotenv.config();

export const Register = async (req, res, next) => {
  const { email, gender, username } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return next(Errors(402, "User with email already exist please login"));
    } else {
      const Pass = await bcrypt.hashSync(req.body.password, 10);
      const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl${username}`;
      const user = new UserModel({
        ...req.body,
        password: Pass,
        picture: gender === "male" ? boyPic : girlPic,
        // password: Pass,
      });
      await user.save();
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          mobile: user.mobile,
        },
        process.env.Jkeys
      );
      const { password, __v, ...rest } = user._doc;

      res
        .cookie("access_token", token, {
          httpOny: true,
          secure: "strict",
          sameSite: process.env.NODE !== "development",
        })
        .json({
          message: "Register successful",
          ...rest,
        });
    }
  } catch (err) {
    next(err);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email })
      .populate("properties")
      .populate("address");

    if (!user) return next(Errors(402, "Wrong credential!"));
    const Compare = await bcrypt.compare(
      req.body.password,
      user?.password || ""
    );
    if (!Compare) return next(Errors(402, "Wrong credential!"));
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
      process.env.Jkeys
    );
    const { password, __v, ...rest } = user._doc;

    res
      .cookie("access_token", token, {
        httpOny: true,
        secure: "strict",
        sameSite: process.env.NODE !== "development",
      })
      .json({
        message: "Login successful",
        ...rest,
      });
  } catch (error) {
    next(error);
  }
};
export const LogOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("LogOut successful");
  } catch (error) {
    next(error);
  }
};
