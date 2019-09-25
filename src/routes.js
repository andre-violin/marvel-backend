const express = require("express");

const CharacterController = require("./controllers/CharacterController");
const UserController = require("./controllers/UserController");

const routes = express.Router();
// GET, POST, PUT e o DELETE
routes.get("/", CharacterController.list);
routes.post("/", CharacterController.store);
routes.get("/:id", CharacterController.index);
routes.delete("/:id", CharacterController.destroy);
routes.put("/:id", CharacterController.update);

routes.post("/user", UserController.create);

module.exports = routes;
