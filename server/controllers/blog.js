import blogModel from "./../models/blogModle.js";
export const Create = async (req, res, next) => {
  const user = req.user;
  try {
    const property = await blogModel.create({
      ...req.body,
      userId: req.user.id,
    });
    res.json(property);
  } catch (error) {
    console.log(error);
  }
};
export const GetItems = async (req, res, next) => {
  try {
    const item = await blogModel.find().populate("userId");
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await blogModel.findById(id).populate("userId");
    // const item = await blogModel.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await blogModel.findByIdAndUpdate(
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
    const item = await blogModel.findByIdAndDelete(id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const GetuserListings = async (req, res, next) => {
  try {
    const item = await blogModel.find();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
