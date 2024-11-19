import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UserModel from "../models/userModle.js";
import savedModel from "../models/saveModle.js";
import { Errors } from "../utils/error.js";
dotenv.config();

export const Register = async (req, res, next) => {
  const { email, password, gender, username } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return next(Errors(402, "User with email already exist please login"));
    } else {
      const Pass = await bcrypt.hashSync(password, 10);
      const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl${username}`;
      const user = new UserModel({
        ...req.body,
        picture: gender === "male" ? boyPic : girlPic,
        password: Pass,
      });
      await user.save();
      res.json({ message: "Registration Successful", email: user.email });
    }
  } catch (err) {
    next(err);
  }
};

export const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return next(Errors(402, "Wrong credential!"));
    const Compare = await bcrypt.compare(req.body.password, user.password);
    if (!Compare) return next(Errors(402, "Wrong credential!"));
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
        secure: false,
        sameSite: true,
      })
      .json({
        message: "Login successful",
        ...rest,
      });
  } catch (error) {
    next(error);
  }
};

export const Users = async (req, res, nex) => {
  try {
    const user = await UserModel.find();
    res.json({
      id: user._id,
      email: user.email,
      mobile: user._mobile,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

export const UserID = async (req, res, next) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return next(Errors(402, "invalid "));
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const Update = async (req, res, next) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const Deletes = async (req, res, next) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    res.json({ message: "user delete successful", id: user._id });
  } catch (error) {
    next(error);
  }
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  // const userId = req.user.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return next(Errors(400, "No saved Item with this user"));
    } else {
      const item = await savedModel.find().populate("estateId");
      res.json(item);
    }
  } catch (error) {
    next(error);
  }
};

export const Profile = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const UploadImg = async (req, res, nex) => {
  try {
  } catch (error) {
    next(error);
  }
};
