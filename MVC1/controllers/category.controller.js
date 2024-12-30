const CategoryModel = require('../models/category.model');

exports.createCategory = async (req, res) => {
    try {
        const category = await CategoryModel.create(req.body);
        res.status(201).send(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        await CategoryModel.findByIdAndUpdate(req
            .params.id, req.body, {
                new: true
            }); // { new: true } => return updated object
        res.status(200).json({
            message: 'Category updated successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.archiveCategory = async (req, res) => {
    try {
        await CategoryModel.findByIdAndUpdate(req.params.id, { show: false });
        res.status(200).json({ message: 'Category archived successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

