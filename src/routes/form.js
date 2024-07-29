const express = require("express");
const router = express.Router();

const formController = require("../controllers/form");

router.post("/submitForm", formController.saveFormData);

module.exports = router;
