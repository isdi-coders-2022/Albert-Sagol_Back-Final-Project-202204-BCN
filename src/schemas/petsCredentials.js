const { Joi } = require("express-validation");

const credentialsCreatePetSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    animal: Joi.string().required(),
    sex: Joi.string().required(),
    picture: Joi.string().required(),
    age: Joi.number().required(),
    description: Joi.string().required(),
    specialTreatment: Joi.string().required(),
  }),
};

const credentialsEditPetSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    id: Joi.string().required(),
    animal: Joi.string().required(),
    sex: Joi.string().required(),
    picture: Joi.string().required(),
    age: Joi.number().required(),
    description: Joi.string().required(),
    specialTreatment: Joi.string().required(),
  }),
};

module.exports = { credentialsCreatePetSchema, credentialsEditPetSchema };
