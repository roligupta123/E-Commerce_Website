const express = require("express")
const router = express.Router()
const {addToCart} = require('../../controller/cartController')

router.post("/cart", addToCart)

module.exports = router


