// Carga la dependencia de express
const express = require("express");

// Carga la librería de CORS
const cors = require("cors");

// Para accesar a las variables de entorno definidas en el archivo .env
require("dotenv").config();

// Importo la conexion a db
const { dbConn } = require("./dataaccess/config");

// Creación del servidor express
const app = express();

// Se usa el midleware de cors. Configura CORS
app.use(cors());

// Se llama la funcion
dbConn();

// Rutas
app.get("/", (req, res) => {
  res.json({
    msg: "Hola fucking mundo!!",
  });
});
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto " + process.env.PORT);
});
