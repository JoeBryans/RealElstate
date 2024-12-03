import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLoud_Name,
  api_key: process.env.Api_Key,
  api_secret: process.env.Api_Secret,
});
export const cloudinaryUploader = async (fileToUpload) => {
  //   return new Promise((resolve, reject) => {
  //     cloudinary.uploader.upload(fileToUpload, (error, result) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve(
  //           {
  //             // public_id: result.public_id,
  //             url: result.secure_url,
  //           },
  //           {
  //             resource_type: "auto",
  //           }
  //         );
  //       }
  //     });
  //   });
  // };
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUpload, (result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};
// export default cloudinaryUploader;
// // RealEstate;
// import { v2 as cloudinary } from "cloudinary";
// import cloudinary from './cloudinary';

cloudinary.config({
  cloud_name: "dlwiafeam",
  api_key: "234171423617168",
  api_secret: "-rmD_5K5FXhqcAh3nRHKTsgt0dA",
});

export default cloudinary;
