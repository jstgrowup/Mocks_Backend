const express = require("express");
const UserModel = require("../Mongo/RegisterSchema");
const app = express.Router();
app.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const add = await UserModel.create(req.body);
    res.send(add._id);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
app.post("/get", async (req, res) => {
  const { id } = req.body;
  try {
    const add = await UserModel.findOne({ _id: id });
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
app.post("/login", async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const respo = await UserModel.findOne({ name, email, password });

    if (!respo.name) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(respo);
    }
  } catch (error) {
    res.status(404).send("User not found");
  }
});
module.exports = app;
