const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const productCategorySchema = new Schema(
  {
    titleEn: { type: String, required: true },
    titleFa: { type: String, required: true },
    image: { type: String, required: false, default: null },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("product-category", productCategorySchema);
