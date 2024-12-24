const userTypeModel = require('../models/userType.model');

exports.createUserType = async (req, res) => {
    try {
        // const userType = new userTypeModel(req.body);
        // await userType.save();
        const userType = await userTypeModel.create(req.body);
        res.status(201).send(userType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserTypes = async (req, res) => {
    try {
        const userTypes = await userTypeModel.find();
        res.status(200).send(userTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserType = async (req, res) => {
    try {
        const userType = await userTypeModel.findById(req.params.id);
        res.status(200).send(userType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateUserType = async (req, res) => {
    try {
        await userTypeModel.findByIdAndUpdate(req.params.id, req.body,{new: true}); // { new: true } => return updated object
        res.status(200).json({ message: 'UserType updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteUserType = async (req, res) => {
    try {
        await userTypeModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'UserType deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

