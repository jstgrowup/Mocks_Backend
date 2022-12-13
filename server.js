const express = require("express");
const app = express();
const cors = require("cors");
const { connect, mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const userRegister = require("./Routes/UserRegister");
app.use("/auth", userRegister);
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;
app.post("/emi", async (req, res) => {
  let { loanamount, annualinterest, tenure } = req.body;
  let rate = annualinterest / 12 / 100;
  rate.toFixed(6);
  let months = tenure * 12;

  let EMI =(loanamount * rate * Math.pow(1 + rate, months)) /
    (Math.pow(1 + rate, months) - 1);
  EMI = Math.floor(EMI);

  let totalPayment = Math.floor(EMI * months);

  let interestPayable = Math.floor(totalPayment - loanamount);

  res.send({ EMI, totalPayment, interestPayable });
});
app.get("/", (req, res) => {
  res.send("hey home");
});
app.listen(PORT, async () => {
  await connect(MONGOURL);

  console.log("server started");
});
