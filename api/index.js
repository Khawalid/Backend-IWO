require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: 'https://iwo.org.pk', // Allow your frontend domain
  optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

const formRoutes = require("../src/routes/form");

app.use("/", formRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
