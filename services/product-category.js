const apiResponse = require("../utils/api-response");
const errorHandler = require("../utils/error-handler");

const ProductCategory = require("../models/product-category");

const perPage = process.env.perPage || 20;

module.exports = new (class ProductCategoryService {
  async create(data, image, res) {
    try {
      const category = new ProductCategory({
        titleEn: data.titleEn,
        titleFa: data.titleFa,
        image: image ? image.path : null,
      });

      const createdCategory = await category.save();
      return apiResponse.created(res, createdCategory);
    } catch (error) {
      return errorHandler(res, error);
    }
  }

  async delete(id, res) {
    try {
      const category = await ProductCategory.findByIdAndDelete(id);
      if (!category) {
        return apiResponse.notFound(res);
      }
      return apiResponse.deleted(res, category);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async findOne(id, res) {
    try {
      const category = await ProductCategory.findById(id);
      if (!category) {
        return apiResponse.notFound(res);
      }
      return apiResponse.found(res, category);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async findAll(page, res) {
    try {
      const categories = await ProductCategory.find()
        .sort({ createdAt: "desc" })
        .skip((page - 1) * perPage)
        .limit(perPage);

      return apiResponse.found(res, categories);
    } catch (error) {
      errorHandler(res, error);
    }
  }
})();
