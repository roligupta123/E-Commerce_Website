const express = require("express")
const router = express.Router();
const { getProductById, getProducts, addProduct, updateProduct, deleteProduct } = require("../../controller/productController");
const { isAdmin } = require("../../middleware/isAdminMiddleware")


router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/add-product/", isAdmin, addProduct);
router.put("/product/:id", isAdmin, updateProduct);
router.delete("/product/:id", isAdmin, deleteProduct);

module.exports = router;