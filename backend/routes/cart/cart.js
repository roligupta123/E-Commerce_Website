const express = require("express")
const router = express.Router()
const {addToCart, getUserCart, deleteFromCart} = require('../../controller/cartController')

router.post("/cart", addToCart)
router.get("/cart", getUserCart)
router.delete("/cart/:productId", getUserCart)

module.exports = router


