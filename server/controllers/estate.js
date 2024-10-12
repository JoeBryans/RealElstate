import estateModel from "./../models/estateModle.js";
export const Create = async (req, res, next) => {
  // const user = req.user._id;
  try {
    const property = await estateModel.create({
      ...req.body,
      userId: req.user,
    });
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
    const item = await estateModel.findById(id).populate("userId");
    // const item = await estateModel.findById(id);
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

export const Creates = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      password;
      res.json("User with email already exist please login");
    }

    const Pass = await bcrypt.hashSync(req.body.password, 10);
    const newuser = await UserModel.create({
      ...req.body,

      password: Pass,
    });
    // const users = await newuser.save();
    const { password, ...rest } = user._doc;
    res.json({ message: "Registration Successful", rest });
  } catch (err) {
    console.log(err);
  }
};
