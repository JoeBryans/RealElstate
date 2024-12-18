import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // select: false,
    },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "address" }],
    role: {
      type: String,
      defualt: "user",
    },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "medial" }],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "save" }],
    properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "estate" }],
    picture: { type: [], required: true },
    gender: { type: String, enum: ["male", "female"] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
