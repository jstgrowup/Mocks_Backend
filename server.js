const express = require("express");
const app = express();
const cors = require("cors");
const { connect, mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const ProductsRegister = require("./Routes/ProductsAdd");
app.use("/products", ProductsRegister);
const Bookmark = require("./Routes/BookMark");
app.use("/books", Bookmark);
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const MONGOURL = process.env.MONGO_URL;
app.post("/emi", async (req, res) => {
  let { loanamount, annualinterest, tenure } = req.body;
  let rate = annualinterest / 12 / 100;
  rate = rate.toFixed(6);
  let months = tenure;

  let EMI =
    (loanamount * rate * Math.pow(1 + rate, months)) /
    (Math.pow(1 + rate, months) - 1);
  EMI = Math.round(EMI);
  let totalPayment = EMI * months;
  let interestPayable = totalPayment - loanamount;
  res.send({ EMI, totalPayment, interestPayable });
});
app.get("/", (req, res) => {
  res.send("hey home");
});
app.listen(PORT, async () => {
  await connect(MONGOURL);

  console.log("server started on port 8080");
});
