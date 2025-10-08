import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import { useCart } from "../context/CardContext";

export default function CheckoutUI() {
  const { cartItems } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side - Address Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              className="w-full border p-2 rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full border p-2 rounded"
              />
            </div>
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              className="w-full border p-2 rounded"
            />

            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-500"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-2">
                  <p>{item.title} x {item.quantity || 1}</p>
                  <p>₹{item.price * (item.quantity || 1)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty</p>
            )}
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>₹{getTotal()}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
