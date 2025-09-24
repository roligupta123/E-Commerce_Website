const express = require("express")
const router = express.Router();
const products = require("../../data/products.json")
const {getProducts} = require("../../controller/productController");


router.get("/products", getProducts);

module.exports = router;