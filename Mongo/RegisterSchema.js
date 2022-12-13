const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const UserModel = model("users", UserSchema);
module.exports = UserModel;
