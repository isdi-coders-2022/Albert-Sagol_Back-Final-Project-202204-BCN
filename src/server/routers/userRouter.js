const express = require("express");
const { validate } = require("express-validation");
const { userLogin, userRegister } = require("../controllers/userControllers");
const {
  credentialsRegisterSchema,
  credentialsLoginSchema,
} = require("../../schemas/userCredentials");

const userRouter = express.Router();

userRouter.post("/login", validate(credentialsLoginSchema), userLogin);
userRouter.post("/register", validate(credentialsRegisterSchema), userRegister);

module.exports = userRouter;
