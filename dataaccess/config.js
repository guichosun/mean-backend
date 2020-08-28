// Las importaciones necesarias.
const mongoose = require("mongoose");

const dbConn = async () => {
  console.log("Conectando a MongoDB..." + process.env.DB_CONN);
  try {
    await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Conectado correctamente a MongoDB");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar a db");
  }
};

// Exporta el dbConn para poder usarlo en otros lados.
module.exports = {
  dbConn,
};
