const express = require("express");
const { body, check } = require("express-validator");
const multer = require("multer");

const controller = require("../controllers/product-category");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media/product-categories");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filter,
  limits: { fileSize: 5000000 },
});

router.post(
  "",
  upload.single("image"),
  [
    body("titleEn", "invalid title en. Title en must be greater that 2 chars.")
      .trim()
      .isLength({ min: 2 }),
    body("titleFa", "invalid title fa. Title fa must be greater that 2 chars.")
      .trim()
      .isLength({ min: 2 }),
  ],
  controller.create
);

module.exports = router;
