const express = require("express")
const router = express.Router();
const { getProductById, getProducts } = require("../../controller/productController");


router.get("/products", getProducts);
router.get("/product/:id", getProductById);

module.exports = router;