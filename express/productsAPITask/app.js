const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const productRouter = require("./productRouter.js");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use("/products", productRouter);
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
