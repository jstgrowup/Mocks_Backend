const express = require("express");
const GameModel = require("../Mongo/GameSchema");
const app = express.Router();
const RandomWord = require("random-words");
app.post("/randomwords",  (req, res) => {
  try {
    const randomWord =RandomWord({ exactly: 7, join: "" });
    console.log("randomWord:", randomWord);
    return res.status(200).send(randomWord);
  } catch (err) {
    res.status.send("msg", err);
  }
});
app.post("/create", async (req, res) => {
  try {
    let user = await GameModel.create(req.body);

    return res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});
app.post("/update", async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  try {
    const updatedScore = await GameModel.updateOne(
      { _id: id },
      { $set: { score } }
    );
    return res.send({ updatedScore });
  } catch (err) {
    res.send(err);
  }
});
app.post("/getuser", async (req, res) => {
  const { id } = req.body;

  try {
    const user = await GameModel.findById({ _id: id });
    return res.send(user);
  } catch (err) {
    res.send(err);
  }
});
// app.get("/get", async (req, res) => {
//   try {
//     const add = await JobsModel.find();

//     res.send(add);
//   } catch (error) {
//     res.status(401).send(error.message);
//   }
// });
// app.post("/filter", async (req, res) => {
//   const { type } = req.body;
//   try {
//     const add = await JobsModel.find({ Role: type });

//     res.send(add);
//   } catch (error) {
//     res.status(401).send(error.message);
//   }
// });

// app.post("/sort", async (req, res) => {
//   const { type } = req.body;

//   try {
//     if (type === "dec") {
//       let updatedData = await JobsModel.find().sort({ createdAt: -1 });

//       res.send(updatedData);
//     } else {
//       let updatedData = await JobsModel.find().sort({ createdAt: 1 });

//       res.send(updatedData);
//     }
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });
// app.post("/search", async (req, res) => {
//   const { type } = req.body;

//   try {
//     let updatedData = await JobsModel.find({ Language: type });

//     res.send(updatedData);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });
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
