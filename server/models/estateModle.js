import mongoose from "mongoose";
var estateSchema = new mongoose.Schema(
  {
    userId: { type: {}, required: true },
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
    squareFeet: {
      type: String,
    },
    price: {
      type: Number,
      default: "0.00",
    },
    discountPrice: {
      type: Number,
      default: "0.00",
    },
    bathroom: {
      type: Number,
    },
    bedroom: {
      type: Number,
    },
    furnished: {
      type: Boolean,
      default: false,
    },
    packing: {
      type: Boolean,
      default: false,
    },
    offer: {
      type: Boolean,
      default: false,
    },
    image: {
      type: [String],
    },
    feature: String,
  },
  { timestamps: true }
);

//Export the model
const estateModel = mongoose.model("estate", estateSchema);
export default estateModel;
