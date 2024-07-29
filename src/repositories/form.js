const Form = require("../models/form");

exports.saveFormData = async (formData) => {
  const form = new Form(formData);
  return await form.save();
};
