import { cloudinaryUploader } from "../middleware/cloudinary.js";
// import cloudinary from "../middleware/cloudinary.js";
import estateModel from "./../models/estateModle.js";
import fs from "fs";
import UserModel from "./../models/userModle.js";
import { Errors } from "../utils/error.js";

export const CreateImg = async (req, res, next) => {
  // console.log(req.files);
  try {
    const uploader = async (path) => await cloudinaryUploader(path, "Images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      // console.log(file);
      const { path } = file;
      console.log(path);
      const newPath = await uploader(path);
      console.log(newPath);
      urls.push(newPath);
      // fs.unlinkSync(`server/public/images/${req.file.filename}`);
    }
    res.json({ data: urls });
    // console.log(req.user);
  } catch (error) {}
  // try {
  //   const urls = [];
  //   const files = req.files;
  //   for (const file of files) {
  //     const { path } = file;
  //     urls.push(path);
  //     fs.unlinkSync(path);
  //   }
  //   res.json({ data: urls });
  //   console.log(urls);
  // } catch (err) {
  //   next(err);
  // }

  // try {
  //   const photos = req.files;
  //   console.log(photos.path);

  //   if (!photos) {
  //     res.json({ message: "No image found" });
  //   }
  //   let images = photos.map((photo) => {
  //     // console.log(photo.path);
  //     cloudinary.uploader.upload(photo.path);
  //   });
  //   let cloud = await Promise.all(images);

  //   console.log(cloud);

  //   res.json({ message: "Uploaded", cloud });
  // } catch (error) {
  //   next(error);
  // }
  // try {
  //   const cloud = await cloudinary.uploader.upload(req.files.path);
  //   res.json(cloud);
  //   console.log(cloud);
  //   fs.unlinkSync(`server/public/images/${req.file.filename}`);
  // } catch (error) {
  //   next(error);
  // }
};
// try {
//   const uploader = async (path) => await cloudinaryUploader(path, "Images");
//   const urls = [];
//   const files = req.files;
//   for (const file of files) {
//     const { path } = file;
//     console.log(`path is ${path}`);
//     const newPath = await uploader(path);
//     urls.push(newPath);
//   }

//   const property = new estateModel({
//     ...req.body,
//     userId: req.user,
//     image: urls.map((url) => {
//       return url;
//     }),
//   });
//   const pro = await property.save();
//   res.json(pro);
export const Create = async (req, res, next) => {
  const user = req.user.id;
  // const {
  //   name,
  //   description,
  //   address,
  //   type,
  //   propertyType,
  //   price,
  //   bathroom,
  //   bedroom,
  //   image,
  // } = req.body;
  // const { password, ...rest } = user._doc;
  try {
    const uploader = async (path) => await cloudinaryUploader(path, "Images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      // fs.unlinkSync(path);
    }
    const property = await estateModel.create({
      ...req.body,
      userId: user,
      image: urls.map((url) => {
        return url;
      }),
    });
    try {
      await UserModel.findByIdAndUpdate(user, {
        $push: { properties: property._id },
      });
    } catch (error) {
      console.log(error);
    }
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

    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const SaleProperty = async (req, res, next) => {
  try {
    const item = await estateModel.find(type === "sale").populate("userId");

    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await estateModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
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
    let parking = req.query.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }
    let pool = req.query.pool;
    if (pool === undefined || pool === "false") {
      pool = { $in: [false, true] };
    }

    const min = req.query.min || 0;
    const max = req.query.max || 999999;
    const search = req.query.search || "";
    const address = req.query.address || "";
    const property = req.query.propertyType || "";
    const bedroom = req.query.bedroom || 1;
    const bathroom = req.query.bathroom || 1;
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";
    const findListen = await estateModel
      .find({
        $or: [
          {
            name: { $regex: search, $options: "i" },
            address: { $regex: address, $options: "i" },
            price: { $lte: max },
            price: { $gte: min },
            propertyType: { $regex: property, $options: "i" },
            bedroom: { $gte: bedroom },
            bathroom: { $gte: bathroom },
            pool,
            offer,
            furnished,
            type,
            parking,
          },
        ],
      })
      .populate("userId")
      .sort({ [sort]: order })
      .limit(limit)
      .skip(firstIndex);
    res.status(200).json(findListen);
  } catch (err) {
    console.log(err);
  }
};
export const GetuserListings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    const AgentProperty = await estateModel.find({ userId: user._id });

    return res.json(AgentProperty);
  } catch (error) {
    console.log(error);
  }
};
export const MyListings = async (req, res, next) => {
  const agent = req.user.id;

  try {
    const user = await UserModel.findById(agent);
    if (!user) {
      return res.status(400).json("No property found!");
    } else {
      const AgentProperty = await estateModel.find({ userId: agent });

      return res.json(AgentProperty);
    }
  } catch (error) {
    console.log(error);
  }
};
