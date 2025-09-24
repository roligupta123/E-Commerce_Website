const express = require("express")
const router = express.Router();
const products = require("../../data/products.json")
const {getProducts, getProductById} = require("../../controller/productController");


router.get("/products", getProducts);
router.get("/product/:id", getProductById);

module.exports = router;