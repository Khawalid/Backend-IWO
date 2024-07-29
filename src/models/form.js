const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  prefix: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  designation: { type: String, required: true },
  organization: { type: String, required: true },
  subject: { type: String, required: true },
  query: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);
