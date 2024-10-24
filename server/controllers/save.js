import savedModel from "./../models/saveModle.js";
import UserModel from "./../models/userModle.js";
export const Create = async (req, res, next) => {
  const user = req.user.id;
  const { id } = req.params;
  try {
    const savedProperty = await savedModel.create(req.body);
    try {
      const userSaved = await UserModel.findById(user);
      if (userSaved) return res.json("already Saved");
      const userSave = await UserModel.findByIdAndUpdate(user, {
        $push: { saved: savedProperty },
      });
    } catch (error) {
      console.log(error);
    }

    res.json(savedProperty);
  } catch (error) {
    console.log(error.message);
  }
};
export const GetItems = async (req, res, next) => {
  try {
    const item = await savedModel.find().populate("estateId");
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};

export const GetItem = async (req, res, next) => {
  const { id } = req.params;
  const user = req.user.id;
  try {
    const item = await savedModel.findById(id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
// export const UpdateItem = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const item = await saveModel.findByIdAndUpdate(
//       id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.json(item);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const DeleteItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await savedModel.findByIdAndDelete(id);
    res.json("Deleted");
  } catch (error) {
    console.log(error);
  }
};
