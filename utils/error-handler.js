const apiResponse = require("./api-response");

module.exports = (res, error) => {
  console.log(`Error :: ${error}`);

  return apiResponse.failed(res, error.toString());
};