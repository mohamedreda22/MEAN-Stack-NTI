const productModel = require('../models/product.model');

exports.createProduct = async (req, res) => {
    try {
        req.body.imgURL =req.file.filename; // add the file name to the body object before creating the product in the database
        const product = await productModel.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        await productModel.findByIdAndUpdate(req.params.id, req.body,{new: true}); // { new: true } => return updated object
        res.status(200).json({ message: 'Product updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
