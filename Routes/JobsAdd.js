const express = require("express");
const JobsModel = require("../Mongo/JobsSchema");
const app = express.Router();
app.post("/create", async (req, res) => {
  try {
    const add = await JobsModel.create(req.body);
    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
app.get("/get", async (req, res) => {
  try {
    const add = await JobsModel.find();

    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
app.post("/filter", async (req, res) => {
  const { type } = req.body;
  try {
    const add = await JobsModel.find({ Role: type });
  

    res.send(add);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

app.post("/sort", async (req, res) => {
  const { type } = req.body;

  try {
    if (type === "dec") {
      let updatedData = await JobsModel.find().sort({ createdAt: -1 });


      res.send(updatedData);
    } else {
      let updatedData = await JobsModel.find().sort({ createdAt: 1 });

      res.send(updatedData);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.post("/search", async (req, res) => {
  const { type } = req.body;

  try {
    let updatedData = await JobsModel.find({ Language: type });

    res.send(updatedData);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
// app.post("/update", async (req, res) => {
//   let { type, productId } = req.body;

//   let existingcartItems = await ProductModel.findOne({ productId });
//   try {
//     if (type === "dec") {
//       let updatedData = await ProductModel.findByIdAndUpdate(
//         existingcartItems._id,
//         { $set: { Quantity: existingcartItems.Quantity - 1 } }
//       );

//       res.send({
//         message: "item qty decremented",
//       });
//     } else {
//       let updatedData = await ProductModel.findByIdAndUpdate(
//         existingcartItems._id,
//         { $set: { Quantity: existingcartItems.Quantity + 1 } }
//       );

//       return res.send({
//         message: "item qty incremented",
//       });
//     }
//   } catch (e) {
//     return res.status(500).send("something went wrong");
//   }
// });
// app.post("/sort")

module.exports = app;
