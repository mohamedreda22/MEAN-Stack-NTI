const CartModel = require("../models/cart.model");

exports.createCart = async (req, res) => {
  try {
    const cart = await CartModel.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    cart.products.push(req.body);
    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    await CartModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // { new: true } => return updated object
    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.archiveCart = async (req, res) => {
  try {
    await CartModel.findByIdAndUpdate(req.params.id, { show: false });
    res.status(200).json({ message: "Cart archived successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    cart.products.pull(req.body);
    await cart.save();
    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
