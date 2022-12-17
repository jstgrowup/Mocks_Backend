const express = require("express");
const app = express();
const cors = require("cors");
const { connect, mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const JobsRegister = require("./Routes/JobsAdd");
app.use("/jobs", JobsRegister);

const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;
app.listen(PORT, async () => {
  await connect(MONGOURL);

  console.log("server started on port 8080");
});
