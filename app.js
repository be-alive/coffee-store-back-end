const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const Mongoose = require("mongoose");

const Fs = require("fs");
const path = require("path");

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const APP_PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
app.use("/media", express.static("media"));

const productCategoryRoutes = require("./routes/product-category");

app.use("/api/v1/product-category", productCategoryRoutes);

app.use((req, res, next) => {
  Fs.readFile(
    path.join(__dirname, "views", "index.html"),
    "utf-8",
    (error, data) => {
      if (error) {
        const err = new Error("Something went wrong!");
        err.status = 500;
        throw err;
      }
      res.status(200).send(data);
    }
  );
});

const apiResponse = require("./utils/api-response");

app.use((error, req, res, next) => {
  console.log(error);
  const msg = error.message || "";

  return apiResponse.failed(res, msg);
});

Mongoose.connect(MONGODB_URI, { dbName: "coffee-store-db" })
  .then((result) => {
    app.listen(APP_PORT);
  })
  .catch();
