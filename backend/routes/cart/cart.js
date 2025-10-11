const express = require("express")
const router = express.Router()
const {addToCart, getUserCart, deleteFromCart} = require('../../controller/cartController')
const { contactUs } = require("../../controller/contactController")

router.post("/contact", contactUs)
router.post("/cart", addToCart)
router.get("/cart", getUserCart)
router.delete("/cart/:productId", deleteFromCart)

module.exports = router


