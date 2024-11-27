import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  city: {
    type: String,
    required: true,
    index: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

//Export the model
const addressModle = mongoose.model("address", userAddressSchema);
export default addressModle;
