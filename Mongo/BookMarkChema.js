const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  ProductID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
});
const Bookmarks = mongoose.model("bookmarks", bookSchema);
module.exports = Bookmarks;
