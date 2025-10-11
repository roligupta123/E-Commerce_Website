const express = require("express")
const router = express.Router()
const {addToCart, getUserCart, deleteFromCart} = require('../../controller/cartController')
const { contactUs } = require("../../controller/contactController")
const  authMiddleware = require("../../middleware/authMiddleware");
const { createOrder, getUserOrders, getOrderById } = require("../../controller/orderController")

router.post("/contact", authMiddleware, contactUs)

router.post("/cart", authMiddleware, addToCart)
router.get("/cart", authMiddleware, getUserCart)
router.delete("/cart/:productId", authMiddleware, deleteFromCart)

router.post("/orders", authMiddleware, createOrder)
router.get("/orders", authMiddleware, getUserOrders)
router.get("/orders/:id", authMiddleware, getOrderById)

module.exports = router


