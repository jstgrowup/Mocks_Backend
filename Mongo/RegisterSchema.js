const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    Title: { type: String, required: true },
    Quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    Priority: String,
    Description: String,
  },
  {
    timestamps: true,
  }
);
const ProductModel = model("products", UserSchema);
module.exports = ProductModel;
