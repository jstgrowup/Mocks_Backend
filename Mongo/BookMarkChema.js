const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
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
const Bookmarks = mongoose.model("bookmarks", bookSchema);
module.exports = Bookmarks;
