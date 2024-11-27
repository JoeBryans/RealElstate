const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      index: true,
    },
    image: {
      type: [],
    },
  },
  { timestamps: true }
);

//Export the model
const bannerModel = mongoose.model("banner", bannerSchema);
export default bannerModel;
