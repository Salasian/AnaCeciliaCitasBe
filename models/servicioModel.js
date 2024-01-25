const mongoose = require("mongoose");

const servicioSchema = {
  descripcion: String,
  costo: Number,
  nombre: String,
};

const Servicio = mongoose.model("servicio", servicioSchema);

module.exports = Servicio;
