const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('cart');
    res.json(users);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

const addProduct = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    user.cart.push(req.body.productId);
    
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

module.exports = { createUser, addProduct, getAllUsers };
