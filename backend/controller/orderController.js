const Order = require("../models/Order")
const Cart = require("../models/Cart") 

async function createOrder(req, res) {
    try {
        const userId = req.user._id; 
        const { address, paymentMethod } = req.body;

        const cart = await Cart.findOne({ userId }).populate("items.productId");

        if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Your cart is empty" });
        }

        const totalAmount = cart.items.reduce((sum, item) => {
            return sum + item.productId.price * item.quantity;
        }, 0);

        let paymentStatus = "Pending";  
        if (paymentMethod === "Online") {
            paymentStatus = "Paid";
        }

        const newOrder = new Order({
        userId,
        products: cart.items.map((item) => ({
            productId: item.product._id,
            quantity: item.quantity,
        })),
        address,
        paymentMethod,
        totalAmount,
        paymentStatus,
        orderStatus: "Processing",
        });

        await newOrder.save();
        cart.items = [];
        await cart.save();

        res.status(201).json({message: "Order placed successfully", order: newOrder});
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({message: "Something went wrong while placing order",error: error.message});
    }
}

async function getUserOrders(req, res){
    try {
        const userId = req.user._id;
        const orders = await Order.find({ userId }).populate("products.productId", "name price") .sort({ createdAt: -1 }); 

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found" });
        }

        res.status(200).json({message: "Orders fetched successfully", orders});

    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({message: "Something went wrong while fetching orders", error: error.message});
    }
}

async function getOrderById(req, res) {
    try {
        const userId = req.user._id;  
        const orderId = req.params.id;  

        const order = await Order.findOne({ _id: orderId, userId })
        .populate("products.productId", "name price"); 

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order fetched successfully", order });
        
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: "Something went wrong while fetching order details", error: error.message });
    }
}

module.exports = { createOrder, getUserOrders, getOrderById }
