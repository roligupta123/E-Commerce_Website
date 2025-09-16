const Cart = require('../models/Order');

// Create new order
export const createOrder = async (req, res) => {
  try {
    const order = new Order({
      user: req.user._id,
      ...req.body,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (Admin) with populate
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email") // User details
      .populate("orderItems.product", "name price category"); // Product details
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single order by ID with populate
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("orderItems.product", "name price category");

    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// controllers/orderController.js
async function placeOrder(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Order + Payment creation
    await Order.create([req.body.order], { session });
    await Payment.create([req.body.payment], { session });

    await session.commitTransaction();
    res.status(200).json({ message: 'Order placed successfully' });
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ error: 'Transaction failed' });
  } finally {
    session.endSession();
  }
}
