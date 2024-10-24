import saveModel from "./../models/saveModle.js";
export const Create = async (req, res, next) => {
  const user = req.user;
  try {
    const property = await saveModel.create();
    res.json(property);
  } catch (error) {
    console.log(error);
  }
};
export const GetItems = async (req, res, next) => {
  try {
    const item = await saveModel.find().populate("userId");
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await saveModel.findById(id).populate("userId");
    // const item = await saveModel.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await saveModel.findByIdAndUpdate(
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
    const item = await saveModel.findByIdAndDelete(id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const GetuserListings = async (req, res, next) => {
  try {
    const item = await saveModel.find();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
