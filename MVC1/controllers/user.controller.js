const userModel = require("../models/user.model");
const { hashPassword, isMatch ,comparePassword} = require("../utilis/hasing");
const auth = require("../utilis/auth");

exports.createUser = async (req, res) => {
  try {
    // Hash the password before saving it to the database
    req.body.password = await hashPassword(req.body.password);
    req.body.retypepassword = await hashPassword(req.body.retypepassword);
    if(comparePassword(req.body.password, req.body.retypepassword))
    {    
    const user = await userModel.create(req.body);
    res.status(201).send(user);
  }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("userType");
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    // const user = await userModel.findById(req.params.id);
    const user = await userModel.findById(req.params.id).populate("userType");
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // { new: true } => return updated object
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id, { new: true });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAllUsers = async (req, res) => {
  try {
    // Delete all users from the User collection
    const result = await userModel.deleteMany({});

    // Check if any users were deleted
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No users found to delete" });
    }

    // Respond with success message
    res
      .status(200)
      .json({ message: `${result.deletedCount} user(s) deleted successfully` });
  } catch (error) {
    // Handle any errors that occur during the deletion
    res.status(500).json({ message: error.message });
  }
};

// exports.loginUser = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         const passwordMatch = await isMatch(req.body.password, user.password);
//         if (!passwordMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }
//         res.status(200).json({ message: 'Login successful' });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await isMatch(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = auth.generateToken({ id: user._id, email: user.email });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


