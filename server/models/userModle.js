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
    address: [{ city: String, state: String, country: String }],
    role: {
      type: String,
      defualt: "user",
    },
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: "medial" }],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "save" }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
