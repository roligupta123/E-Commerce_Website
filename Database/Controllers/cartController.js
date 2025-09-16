const Cart = require('../models/Cart');
 
// Create or Update Cart
exports.addToCart = async (req, res) => {
  const { user, productId, qty } = req.body;

  try {
    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = new Cart({ user, items: [{ productId, qty }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].qty += qty;
      } else {
        cart.items.push({ productId, qty });
      }
    }

    cart.updatedAt = Date.now();
    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Cart by User
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.user }).populate('items.productId');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove Item from Cart
exports.removeItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.body.user });
    cart.items = cart.items.filter(item => item.productId.toString() !== req.body.productId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
