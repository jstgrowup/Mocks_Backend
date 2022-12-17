const { Schema, model } = require("mongoose");
const JobsSchema = new Schema(
  {
    City: String,
    postedAt: String,
    Company: String,
    Contract: String,
    Language: String,
    Level: String,
    Location: String,
    Position: String,
    Role: String,
  },
  {
    timestamps: true,
  }
);
const JobsModel = model("jobs", JobsSchema);
module.exports = JobsModel;
