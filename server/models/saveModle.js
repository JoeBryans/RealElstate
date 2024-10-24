import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const saveSchema = new mongoose.Schema(
  {
    estateId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

//Export the model
const saveModle = mongoose.model("sava", saveSchema);
export default saveModle;
