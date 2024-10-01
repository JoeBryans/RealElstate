import userModel from "../models/userModle.js";
import bcrypt from "bcrypt";
export const Create = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.json("user already exist ");
    } else {
      const hash = await bcrypt.hashSync(password, 20);
      const user = await userModel.create({ ...req.body, password: hash });
      // const { password, ...others } = user._doc;
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};
export const Login = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.json("user already exist ");
    } else {
      const hash = bcrypt.hashSync(password, 20);
      const user = await userModel.create({ ...req.body, password: hash });
      const { password, ...others } = user._doc;
      res.json(...others);
    }
  } catch (error) {
    console.log(error);
  }
};
