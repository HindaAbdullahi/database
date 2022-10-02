const express = require("express");
const unit = require("../databasse/routers/unit");
const floor = require("../databasse/routers/floor");
const apartment = require("../databasse/routers/apartment");
const tenant = require("../databasse/routers/tenant");
const guarant = require("../databasse/routers/guarant");
const employee = require("../databasse/routers/employee");
const visitor = require("../databasse/routers/visitors");
const complaint = require("../databasse/routers/complaints");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://localhost:27017/apartment', {

  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });



app.use(express.json());
app.use(unit);

app.use(floor);
app.use(apartment);
app.use(tenant);
app.use(guarant);
app.use(employee);
app.use(visitor);
app.use(complaint);
const port = 9000;
app.listen(port, () => {
  console.log(`server up on port 0` + port);
});
