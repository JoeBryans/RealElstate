export const Users = async (req, res, next) => {
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
    const { password, ...rest } = user._doc;

    res.json(rest);
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

// export const GetItem = async (req, res, next) => {
//   const { id } = req.params;
//   // const userId = req.user.id;
//   try {
//     const user = await UserModel.findById(id);
//     if (!user) {
//       return next(Errors(400, "No saved Item with this user"));
//     } else {
//       const item = await savedModel.find().populate("estateId");
//       res.json(item);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

export const Profile = async (req, res, next) => {
  try {
  } catch (error) {}
};

export const userProperties = async (req, res, nex) => {
  try {
    const user = await UserModel.findById(req.params.id).populate("properties");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const properties = await user.properties;
    res.status(200).json(properties);
  } catch (error) {
    console.log(error);
  }
};
export const UploadImg = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const uploader = await cloudinary.uploader.upload(req.file.path);
    console.log(uploader);
    const userUpdate = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body, picture: uploader.secure_url } },
      { new: true }
    );
    await userUpdate.save();
    // fs.unlinkSync(`./public/images/${req.file.filename}`);
    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
};
