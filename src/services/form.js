const formRepository = require("../repositories/form");

exports.saveFormData = async (formData) => {
  try {
    return await formRepository.saveFormData(formData);
  } catch (error) {
    throw error;
  }
};
