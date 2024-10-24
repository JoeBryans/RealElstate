import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const savedSchema = new mongoose.Schema(
  {
    estateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "estate",
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
const savedModle = mongoose.model("save", savedSchema);
export default savedModle;
