const express = require("express");

const CharacterController = require("./controllers/CharacterController");

const routes = express.Router();

routes.get("/", CharacterController.index);

routes.get("/user", CharacterController.user);

module.exports = routes;
