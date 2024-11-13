import UserModel from "../models/userModle.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import { Errors } from "../utils/error.js";

export const Register = async (req, res) => {
  // res.send("register");
  const { email, password } = req.body;
  const existUser = await UserModel.findOne({ email });
  try {
    if (existUser) {
      return next(Errors(404, "user already exist, please login"));
    } else {
      const pass = await bcrypt.hashSync(password, 10);
      const user = new UserModel({ ...req.body, password: pass });
      await user.save();
      res.json({ user, message: "Register successfull" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return next(Errors(404, "user not found!"));

    const existpassword = await bcrypt.compare(password, user.password);
    if (!existpassword) return next(Errors(400, "Invalid email or password"));

    const token = jwt.sign(
      { id: user._id, username: user.lastname, isAdmin: user.isAdmin },
      process.env.Jkeys
    );
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ user: user.lastname, id: user._id });
  } catch (error) {
    next(error);
  }
};
export const AllUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (error) {
    next(Errors(404, "No valid user"));
  }
};
export const user = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
export const Update = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(user);
  } catch (error) {}
};
export const Delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id);

    res.json("delected ");
  } catch (error) {
    next(Errors(404, "user not authenticated"));

    console.log(error);
  }
};
