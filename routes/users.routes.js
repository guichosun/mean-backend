/*
 Archivo que va a contener todas las rutas hechas al api de /api/users.

 Ruta: /api/users

 */

// Importan Router de express
const { Router } = require("express");

const { getUsers, createUser } = require("../controllers/users.controller");

const route = Router();

route.get("/", getUsers);

route.post("/", createUser);

module.exports = route;
