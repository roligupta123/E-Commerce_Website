import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const Card = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to Cart (Connected with Backend)
  const addToCart = async (productId, quantity = 1) => {
    try {
      // 🔹 Get user ID from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?._id;

      if (!userId) {
        alert("Please login to add items to cart");
        return;
      }

      // 🔹 Send request to backend
      const res = await axios.post("http://localhost:3000/user/cart", {
        userId,
        productId,
        quantity,
      });

      console.log("Backend Cart Response:", res.data);

      if (res.data.cart?.items) {
        setCartItems(res.data.cart.items);
      } else {
        console.warn("Cart data not found in response:", res.data);
      }
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      alert("Something went wrong while adding to cart");
    }
  };

  // ✅ Remove item from frontend state
  const removeFromCart = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      const userId = user?.id;

      if (!userId) {
        alert("Please login to modify cart");
        return;
      }

      const res = await axios.post("http://localhost:3000/user/cart", {
        userId,
        productId,
      });

      if (res.data.cart?.items) {
        setCartItems(res.data.cart.items);
      } else {
        setCartItems((prev) => prev.filter((item) => item.productId !== productId));
      }
    } catch (error) {
      console.error("❌ Error removing from cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
