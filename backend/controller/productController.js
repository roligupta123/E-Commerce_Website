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

// Add product
async function addProduct(req, res) {
    try {
        const { title, price, category, description, rating, comments, in_stock, quantity, images } = req.body;

        if (!title || !price || !category || !description || !rating ||!comments || !in_stock || !quantity || !images ) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

        const newProduct = new Product({
            title,
            price,
            category,
            description,
            rating,
            comments,
            in_stock,
            quantity,
            images, 
        });

        const savedProduct = await newProduct.save();

        return res.status(201).json({
            message: "Product added successfully ✅",
            product: savedProduct
        });
    } catch (error) {
        console.log(error.message);
        res.json({message : error.message})
    }
}

// Update Product
async function updateProduct(req, res) {
    const productId = req.params.id;
    const updateData = req.body;

    try {
        const updatedProduct  = await Product.findByIdAndUpdate(productId, updateData, {new:true, runValidators: true});
        if (!updatedProduct ) {
            return res.status(404).json({message : "Product not found"})
        }
        res.status(200).json({message : "Product updated successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
}

//Delete Product

async function deleteProduct(req, res) {
    const productId = req.params.id;
    try {
        const product = await Product.findById({productId})
        if (!product) {
            return res.status(400).json({message :"Product not found"})
        }
        await Product.findByIdAndDelete(productId)
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
}


module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct }
