import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to Cart
  const addToCart = async (productId, quantity = 1) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id || user?.id; // check your user object

      if (!userId) {
        alert("Please login to add items to cart");
        return;
      }

      const res = await axios.post("http://localhost:3000/user/cart", {
        userId,
        productId,
        quantity,
      });

      if (res.data.cart?.items) {
        setCartItems(res.data.cart.items);
      } else {
        console.warn("Cart data not found in response", res.data);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Something went wrong while adding to cart");
    }
  };

  // ✅ Remove from Cart
  const removeFromCart = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id || user?.id;

      if (!userId) {
        alert("Please login to remove items");
        return;
      }

      const res = await axios.post("http://localhost:3000/user/cart", {
        userId,
        productId,
      });

      if (res.data.cart?.items) {
        setCartItems(res.data.cart.items);
      } else {
        setCartItems(prev => prev.filter(item => item.product._id !== productId));
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  // ✅ Fetch cart on load
  const fetchCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id || user?.id;

      if (!userId) return;

      const res = await axios.get(`http://localhost:3000/user/cart/${userId}`);
      if (res.data.cart?.items) {
        setCartItems(res.data.cart.items);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
