import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const CONNECTION = process.env.MONGO;

const DataBase = async () => {
  try {
    await mongoose.connect(CONNECTION, {
      family: 4,
    });
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default DataBase;
