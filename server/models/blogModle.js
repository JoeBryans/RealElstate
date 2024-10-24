import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: {
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
    },
    image: {
      type: [String],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

//Export the model
const blogModel = mongoose.model("blog", blogSchema);
export default blogModel;
