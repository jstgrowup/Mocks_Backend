const { Schema, model } = require("mongoose");
const GameSchema = new Schema(
  {
    Level: String,
    Score: { type: Number, default: 0 },
    Name: String,
  },
  {
    timestamps: true,
  }
);
const GameModel = model("games", GameSchema);
module.exports = GameModel;
