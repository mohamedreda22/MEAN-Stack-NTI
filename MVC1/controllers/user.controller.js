const userModel = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.params.id, req.body,{new: true}); // { new: true } => return updated object
        res.status(200).json({ message: 'User updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id,{new: true});
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}