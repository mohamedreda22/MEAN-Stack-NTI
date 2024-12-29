const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

const upload = require('../config/multerConfig');
//upload.single('productImage') is a middleware that will handle the file upload and add the file to the request object as req.file
router.post('/', upload.single('productImage'), productController.createProduct); 
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;