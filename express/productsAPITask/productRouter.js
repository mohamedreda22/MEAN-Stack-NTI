const express = require("express");
const router = express.Router();
const upload = require("../utilis/multerConfig");
const fs = require("fs");
const filePath = "./productsList.json";

// Helper function to read data from the file
const readProductsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data || "[]"));
      }
    });
  });
};

// Helper function to write data to the file
const writeProductsToFile = (products) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// GET all products or filter by id or name
// router.get("/", async (req, res) => {
//   try {
//     const productsList = await readProductsFromFile();
//     if (req.query.id) {
//       const product = productsList.find((p) => p.id == req.query.id);
//       if (!product) {
//         return res.status(404).json({ error: "Product not found" });
//       }
//       return res.json(product);
//     } else if (req.query.name) {
//       const product = productsList.find((p) => p.name == req.query.name);
//       return res.json(product || { error: "Product not found" });
//     } else {
//       res.status(200).json(productsList);
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// GET all products or filter by id or name
router.get("/", async (req, res) => {
  try {
    const productsList = await readProductsFromFile();
    const { id, name } = req.query;

    let results = productsList;

    if (id) {
      results = results.filter((p) => p.id == id);
    }

    if (name) {
      results = results.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET product by id
router.get("/:id", async (req, res) => {
  try {
    const productsList = await readProductsFromFile();
    const product = productsList.find((p) => p.id == req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE product by id
router.delete("/:id", async (req, res) => {
  try {
    const productsList = await readProductsFromFile();
    const index = productsList.findIndex((p) => p.id == req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Product not found" });
    }
    productsList.splice(index, 1);
    await writeProductsToFile(productsList);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", upload.single("imgURL"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const productsList = await readProductsFromFile();
    const newProduct = {
      id: productsList.length + 1,
      name,
      description,
      imgURL: req.file ? req.file.path : "",
    };
    productsList.push(newProduct);
    await writeProductsToFile(productsList);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new product without file upload
// router.post("/", async (req, res) => {
//   try {
//     const { name, description,imgURL } = req.body;
//     const productsList = await readProductsFromFile();
//     const newProduct = {
//       id: productsList.length + 1,
//       name,
//       description,
//       imgURL: req.file ? req.file.path : "",
//     };
//     productsList.push(newProduct);
//     await writeProductsToFile(productsList);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// PUT (update) product by id
// router.put("/:id", async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const productsList = await readProductsFromFile();
//     const index = productsList.findIndex((p) => p.id == req.params.id);
//     if (index === -1) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     productsList[index] = {
//       id: parseInt(req.params.id),
//       name,
//       description,
//       imgURL: productsList[index].imgURL,
//     };
//     await writeProductsToFile(productsList);
//     res.status(200).json(productsList[index]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.put("/:id", upload.single("imgURL"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const productsList = await readProductsFromFile();
    const index = productsList.findIndex((p) => p.id == req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Product not found" });
    }
    const updatedProduct = {
      ...productsList[index],
      name: name || productsList[index].name,
      description: description || productsList[index].description,
      imgURL: req.file ? req.file.path : productsList[index].imgURL,
    };
    productsList[index] = updatedProduct;
    await writeProductsToFile(productsList);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
