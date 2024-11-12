import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLoud_Name,
  api_key: process.env.Api_Key,
  api_secret: process.env.Api_Secret,
});

export default cloudinary;
// // RealEstate;

// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dlwiafeam",
//   api_key: "234171423617168",
//   api_secret: "-rmD_5K5FXhqcAh3nRHKTsgt0dA",
// });

// export default cloudinary;
