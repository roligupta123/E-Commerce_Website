const express = require("express")
const router = express.Router();
const { getProductById, getProducts, addProduct } = require("../../controller/productController");
const { isAdmin } = require("../../middleware/isAdminMiddleware")


router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/add-product/", isAdmin, addProduct);

module.exports = router;