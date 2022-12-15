const express = require("express");
const ProductModel = require("../Mongo/RegisterSchema");
const app = express.Router();
app.post("/create", async (req, res) => {
  console.log("res:", req.body);

  try {
    const add = await ProductModel.create(req.body);
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
app.post("/get", async (req, res) => {
  const {id}=req.body
  try {
    const add = await ProductModel.find();
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
// app.post("/sort")

module.exports = app;
