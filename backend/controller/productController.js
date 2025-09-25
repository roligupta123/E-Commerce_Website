const Product = require("../models/product")

// Get all data from DB

async function getProducts(req, res) {
    const data = await Product.find();
    res.json(data)
}

//Get product by Id

async function getProductById(req, res) {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
        return res.status(404).json({ error: "Product not found" });
        }
        res.json(product)

    } catch (error) {
        console.log("Found an error : ", error.message);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getProducts, getProductById }
