const express = require("express");
const { validate } = require("express-validation");
const {
  credentialsCreatePetSchema,
  credentialsEditPetSchema,
} = require("../../schemas/petsCredentials");
const {
  getPets,
  deletePet,
  createPet,
  editPet,
} = require("../controllers/petsControllers");

const petsRouter = express.Router();

petsRouter.get("/", getPets);
petsRouter.delete("/:id", deletePet);
petsRouter.post("/create", validate(credentialsCreatePetSchema), createPet);
petsRouter.put("/edit", validate(credentialsEditPetSchema), editPet);

module.exports = petsRouter;
