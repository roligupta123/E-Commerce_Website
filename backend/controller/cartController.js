const Cart = require("../models/Cart")
const Product = require("../models/product")

async function addToCart(req, res) {
    try {
        const { userId, productId, quantity} = req.body
        if (!userId || !productId || !quantity) {
            return res.status(400).json({message : "Require all fields"})
        }

        const product = await Product.findById(productId)
        if ( !product ) {
            return res.status(404).json({message : "Product not found "})
        }
        const price = product.price

        let cart = await Cart.findOne({userId})

        if(!cart){
            cart = new Cart({
                user : userId,
                items : [{productId, quantity, price}],
                totalPrice : quantity * price 
            }) 
        }
        else{
            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ product: productId, quantity, price });
            }
            cart.totalPrice = cart.items.reduce(
                (sum, item) => sum + item.quantity * item.price,
                0
            );
        }
        await cart.save();

        res.status(200).json({message: "Product added to cart successfully", cart});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", message: error.message });
    }
}