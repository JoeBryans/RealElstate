import cloudinary from "../middleware/cloudinary.js";
import estateModel from "./../models/estateModle.js";
export const CreateImg = async (req, res) => {
  console.log(req.file);
  try {
    const cloud = await cloudinary.uploader.upload(req.file.path);
    res.json(cloud);
    console.log(cloud);
  } catch (error) {
    console.log(error);
  }
};
export const Create = async (req, res, next) => {
  // const images = req.file.fileName;
  console.log(req.file);
  try {
    const upload = await cloudinary.uploader.upload(req.file.path);

    const property = await estateModel.create({
      ...req.body,
      userId: req.user,
      image: upload.secure_url,
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

export const Search = async (req, res, next) => {
  console.log(req.query);
  try {
    const limit = parseInt(req.query.limit) || 9;
    const firstIndex = parseInt(req.query.firstIndex) || 0;
    let offer = req.query.offer;
    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }
    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }
    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }
    if (type === "sale") {
      type = "sale";
    }
    if (type === "rent") {
      type = "rent";
    }
    let packing = req.query.packing;
    if (packing === undefined || packing === "false") {
      packing = { $in: [false, true] };
    }
    let pool = req.query.pool;
    if (pool === undefined || pool === "false") {
      pool = { $in: [false, true] };
    }
    // let pool = req.query.pool;
    // if (pool === undefined || pool === "false") {
    //   pool = { $in: [false, true] };
    // }
    const min = req.query.price || 0;
    const max = req.query.price || 0;
    const search = req.query.search || "";
    const address = req.query.address || "";
    const property = req.query.propertyType || "";
    const bedroom = req.query.bedroom || 0;
    const bathroom = req.query.bathroom || 0;
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";
    const findListen = await estateModel
      .find({
        $or: [
          {
            name: { $regex: search, $options: "i" },
            address: { $regex: address, $options: "i" },
            // price: { $gte: min },
            // price: { $lte: max },
            propertyType: { $regex: property, $options: "i" },
            bedroom: { $gte: bedroom },
            bathroom: { $gte: bathroom },
            // pool,
            offer,
            furnished,
            type,
            packing,
          },
        ],
      })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(firstIndex);
    res.status(200).json(findListen);
  } catch (err) {
    console.log(err);
  }
};
export const GetuserListings = async (req, res, next) => {
  try {
    const item = await estateModel.find();
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
