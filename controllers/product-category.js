const { validationResult } = require("express-validator");
const express = require("express");

const service = require("../services/product-category");

const apiResponse = require("../utils/api-response");
const deleteImage = require("../utils/delete-image");

module.exports = new (class ProductCategoryController {
  async create(req, res, next) {
    const image = req.file;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (image) {
        deleteImage(image.path);
      }
      return apiResponse.validation(res, errors.array());
    }
    return service.create(req.body, image, res);
  }
})();
