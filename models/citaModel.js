const mongoose = require("mongoose");

const citaSchema = {
  hora: String,
  precio: Number,
  fecha: Date,
  servicios: [{ type: mongoose.Schema.Types.ObjectId, ref: "servicio" }],
  cliente: String,
  telefono: String,
};

const Cita = mongoose.model("cita", citaSchema);

module.exports = Cita;
