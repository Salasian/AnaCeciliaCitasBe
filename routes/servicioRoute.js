const express = require("express");
const router = express.Router();
const Servicio = require("../models/servicioModel");

router.route("/").get(async (req, res) => {
  await Servicio.find().then((foundServicios) => {
    return res.json(foundServicios).status(200);
  });
});

router.route("/").post(async (req, res) => {
  const { costo, descripcion, nombre } = req.body;
  try {
    const admitido = await Servicio.findOne({ nombre: nombre });
    console.log(admitido);
    if (admitido) return res.status(400).send("Servicio ya creado");
    const newServicio = new Servicio({
      costo,
      descripcion,
      nombre,
    });

    newServicio.save();
    return res.status(200).send(newServicio);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Servicio.findByIdAndDelete(id);
    return res.status(200).send(borrado);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const { costo, descripcion, nombre } = req.body;

  try {
    const servicio = await Servicio.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          costo: costo,
          descripcion: descripcion,
          nombre: nombre,
        },
      }
    );
    return res.status(200).send(servicio);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const servicio = await Servicio.findById(id);
    return res.status(200).send(servicio);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
