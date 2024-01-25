const express = require("express");
const router = express.Router();
const Cita = require("../models/citaModel");

router.route("/").post((req, res) => {
  const { hora, precio, fecha, servicios, cliente, telefono } = req.body;
  const newCita = new Cita({
    hora,
    precio,
    fecha,
    servicios,
    cliente,
    telefono,
  });

  newCita.save();
  return res.status(200).send(newCita);
});

router.route("/").get(async (req, res) => {
  try {
    const citas = await Cita.find().populate("servicios");
    return res.status(200).send(citas);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Cita.findByIdAndDelete(id);
    return res.status(200).send(borrado);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const { hora, precio, fecha, servicio, cliente, telefono } = req.body;

  try {
    const cita = await Cita.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          hora: hora,
          precio: precio,
          fecha: fecha,
          servicio: servicio,
          cliente: cliente,
          telefono: telefono,
        },
      }
    );
    return res.status(200).send(cita);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const cita = await Cita.findById(id);
    return res.status(200).send(cita);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
