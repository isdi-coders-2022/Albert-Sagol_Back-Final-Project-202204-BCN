const { Joi } = require("express-validation");

const credentialsLoginSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const credentialsRegisterSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    adminUser: Joi.boolean().required(),
    eMail: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = { credentialsLoginSchema, credentialsRegisterSchema };
