const CartModel = require("../models/cart.model");
const mongoose = require("mongoose");

exports.getCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* exports.addToCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products.push(req.body);
    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */

exports.updateCart = async (req, res) => {
  try {
    const cart = await CartModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* exports.removeFromCart = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products.pull(req.body.productId);
    await cart.save();
    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */

exports.getCartByUser = async (req, res) => {
  try {
    const cart = await CartModel.findOne({ user: req.params.id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.createCart = async (req, res) => {
  try {
    const { userId, products } = req.body;

    // Ensure that the request contains the necessary data
    if (!userId || !products) {
      return res
        .status(400)
        .json({ message: "User ID and products are required" });
    }

    // Validate the userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }

    // Convert userId to ObjectId using the 'new' keyword
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Create a new cart instance
    const newCart = new CartModel({
      user: userObjectId, // Use the converted ObjectId
      products: products,
    });

    // Save the new cart to the database
    await newCart.save();
    res
      .status(201)
      .json({ message: "Cart created successfully", cart: newCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { cartId, product } = req.body;
    const cart = await CartModel.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products.push(product); // Add the product to the cart
    await cart.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { cartId, productId } = req.body;
    const cart = await CartModel.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products.pull(productId); // Remove product by ID
    await cart.save();
    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
