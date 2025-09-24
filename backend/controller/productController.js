const Product = require("../models/product")

// Get all data from DB

async function getProducts(req, res) {
    const data = await Product.find();
    res.json(data)
}

module.exports = {getProducts}

