import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import UserModel from "../models/userModle.js";
import savedModel from "../models/saveModle.js";
// import { CreateError } from "../utils/errorCreater.js";
dotenv.config();

export const Register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.json("User with email already exist please login");
    } else {
      const Pass = await bcrypt.hashSync(password, 10);
      const user = new UserModel({
        ...req.body,
        password: Pass,
      });
      await user.save();
      res.json({ message: "Registration Successful", email: user.email });
    }
  } catch (err) {
    console.log(err);
  }
};

export const Login = async (req, res, nex) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  try {
    if (!user) {
      res.json("Wrong credential");
    }

    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      res.json("invalid email or password");
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        mobile: user.mobile,
      },
      process.env.Jkeys
    );

    res.cookie("token", token).json({
      message: "Login successful",
      id: user._id,
      email: user.email,
      mobile: user.mobile,
      username: user.username,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Users = async (req, res, nex) => {
  // const { password } = req.body;
  try {
    const user = await UserModel.find();
    // const { password, ...rest } = user._doc;

    res.json({
      id: user._id,
      email: user.email,
      mobile: user._mobile,
      role: user.role,
    });
  } catch (error) {}
};

export const UserID = async (req, res, next) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      // return next(CreateError(402, "invalid "));
      res.json("wrong Credential");
    }
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Update = async (req, res, nex) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    await user.save();
    res.json(user);
  } catch (error) {}
};

export const Deletes = async (req, res, nex) => {
  const id = req.user.id;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    res.json({ message: "user delete successful", id: user._id });
  } catch (error) {}
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  // const userId = req.user.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.json("No saved Item with this user");
    } else {
      const item = await savedModel.find().populate("estateId");
      res.json(item);
    }
  } catch (error) {
    console.log(error);
  }
};

export const Profile = async (req, res, nex) => {
  try {
  } catch (error) {}
};

export const UploadImg = async (req, res, nex) => {
  try {
  } catch (error) {}
};
