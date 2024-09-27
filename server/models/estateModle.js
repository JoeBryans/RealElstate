const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var estateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
const estateModel = mongoose.model("estate", estateSchema);
export default estateModel;
