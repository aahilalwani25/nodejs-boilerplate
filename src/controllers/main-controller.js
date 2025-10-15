const testController = require("./test-controller");
const userController = require("./userController");

const registerController = userController.registerController;
const testingController = testController.testController;

module.exports = {
  registerController,
  testingController,
};
