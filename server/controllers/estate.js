import estateModel from "./../models/estateModle";
export const Create = async (req, res, next) => {
  try {
    const property = await estateModel.create(req.body);
    res.json(property);
  } catch (error) {
    console.log(error);
  }
};
export const GetItems = async (req, res, next) => {
  try {
    const item = await estateModel.find();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await estateModel.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await estateModel.findByIdAndUpdate(
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
    const item = await estateModel.findByIdAndDelete(id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};
