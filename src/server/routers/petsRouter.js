const express = require("express");
const {
  getPets,
  deletePet,
  createPet,
  editPet,
} = require("../controllers/petsControllers");

const petsRouter = express.Router();

petsRouter.get("/", getPets);
petsRouter.delete("/:id", deletePet);
petsRouter.post("/create", createPet);
petsRouter.put("/edit", editPet);

module.exports = petsRouter;
