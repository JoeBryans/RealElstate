import { Errors } from "../utils/error.js";
import addressModle from "../models/address.js";
import UserModel from "../models/userModle.js";

export const Create = async (req, res, next) => {
  const user = req.user;
  try {
    const address = await addressModle.create({
      ...req.body,
      userId: user.id,
    });

    const userUpdate = await UserModel.findByIdAndUpdate(
      user.id,
      { $set: { ...req.body, address: address._id } },
      { new: true }
    );
    await userUpdate.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const GetItems = async (req, res, next) => {
  try {
    const item = await addressModle.find();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await addressModle.findById(id);
    // const item = await addressModle.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await addressModle.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const DeleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await addressModle.findByIdAndDelete(id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};
