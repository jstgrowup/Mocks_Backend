const express = require("express");
const BookMarkModel = require("../Mongo/BookMarkChema");
const app = express.Router();
app.get("/get", async (req, res) => {
  try {
    let data = await BookMarkModel.find();
    return res.send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});
app.post("/post", async (req, res) => {
  try {
    let data = await BookMarkModel.create(req.body);
    return res.send(data);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
});
app.post("/delete", async (req, res) => {
  const { id } = req.body;

  try {
    await BookMarkModel.findByIdAndDelete({ _id: id });
    res.send("successfully deleted");
  } catch (error) {
    res.status(404).send(error.message);
  }
});
module.exports = app;
