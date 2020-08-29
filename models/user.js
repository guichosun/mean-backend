// Se importa dos caracteristicas del paquete mongoose
const { Schema, model } = require("mongoose");
/**
 * Va a representar un usuario en MongoDB
 */

//  Definicion de cada registro que se mandará a mongo.
const UserSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "USER_ROLE",
  },
  // Para la autenticacion con google
  google: {
    type: Boolean,
    default: false,
  },
});

/*
Mecanismo para sobreescribir o quitar atributos que regresa mongoose al momento de crear la instancia del Schema

Es para fines visuales, en mongodb no se verá afectado.
*/
UserSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  console.log(object);
  return object;
});
// Lo exporta para poder realizar lasa operaciones CRUD en este documento (tabla).
// " User " es el nombre del la 'tabla' que le vamos asignar.
// OjO mongoose se va a encargar de añadirle la 's' al nombre. En MongoDB, quedaría 'Users'
module.exports = model("User", UserSchema);
