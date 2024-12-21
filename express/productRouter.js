const express = require("express");
const router = express.Router();
const upload = require("./utilis/multerConfig");
const ProductsArray = [
  {
    id: 1,
    name: "Phone",
    description: "description of the Phone",
    imgURL: "img1.png",
  },
  {
    id: 2,
    name: "card",
    description: "description of the card",
    imgURL: "img2.png",
  },
  {
    id: 3,
    name: "ssss",
    description: "description of the ssss",
    imgURL: "img3.jpg",
  },
];

router.get("/", (req, res) => {
  if (req.query.id) {
    const product = ProductsArray.find((p) => p.id == req.query.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    } else {
      return res.json(product);
    }
  } else if (req.query.name) {
    const product = ProductsArray.find((p) => p.name == req.query.name);
    return res.json(product);
  } else {
    res.status(200).json(ProductsArray);
  }
});
router.get("/:id", (req, res) => {
  const product = ProductsArray.find((p) => p.id == req.params.id);
  res.json(product);
});

router.delete("/:id", (req, res) => {
  const index = ProductsArray.findIndex((p) => p.id == req.params.id);
  if (index == -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  ProductsArray.splice(index, 1);
  res.status(204).json();
});

router.post("/", upload.single("productImage"), (req, res) => {
  try {
    const { id, name, description } = req.body;
    const imageName = req.file.filename;
    ProductsArray.push({ id, name, description, imgURL: imageName });
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json("error: ", { error: error.message });
  }
});

module.exports = router;
