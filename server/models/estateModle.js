import mongoose from "mongoose";
var estateSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
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
      default: 0.0,
    },
    discountPrice: {
      type: Number,
      default: 0.0,
    },
    bathroom: {
      type: Number,
      default: 0,
    },
    bedroom: {
      type: Number,
      default: 0,
    },
    furnished: {
      type: Boolean,
      default: false,
    },
    parking: {
      type: Boolean,
      default: false,
    },
    pool: {
      type: Boolean,
      default: false,
    },
    offer: {
      type: Boolean,
      default: false,
    },
    image: {
      type: [],
    },

    propertyStatus: { type: String, default: "available" },
    withFeature: { type: Boolean, default: false },
    feature: [String],
  },
  { timestamps: true }
);

//Export the model
const estateModel = mongoose.model("estate", estateSchema);
export default estateModel;
