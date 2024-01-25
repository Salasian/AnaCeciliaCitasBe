const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://iansalas216755:salon@anaceciliasalon.bvymsg4.mongodb.net/anacecilia",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/cita", require("./routes/citaRoute"));

app.use("/servicio", require("./routes/servicioRoute"));

app.listen(3001, function () {
  console.log("Running on 3001");
});
