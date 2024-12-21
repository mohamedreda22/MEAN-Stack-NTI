const express = require("express");
const app = express();
const port = 5000;
const productRouter = require("./productRouter.js");
app.use(express.json());
app.use("/uploads", express.static("./images"));
app.use("/products", productRouter);
app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
