/*
Archivo que contiene el handler para obtener a todos los usuarios.
*/

// Se importa el modelo de la tabla o collection users
const UserDB = require("../models/user");

const getUsers = async (req, res) => {
  // Así le indicamos a mongoose que busque todos y que solo traiga esa información
  const users = await UserDB.find({}, "nombre email img role google");

  res.json({
    ok: true,
    users,
  });
};

const createUser = async (req, res) => {
  // req.body;
  // console.log(req.body);
  const user = new UserDB(req.body);

  await user.save();

  res.json({
    ok: true,
    user,
  });
};

module.exports = {
  getUsers,
  createUser,
};
