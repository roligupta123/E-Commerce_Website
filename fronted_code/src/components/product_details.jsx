import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../pages/Navbar";
import { Link } from 'react-router-dom'

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error:", err));
    }
  }, [id]);

  if (!product) {
    return <p className="p-4">Loading product details...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8 pt-[40px] mt-[30px] bg-white shadow-lg rounded-2xl flex flex-col md:flex-row gap-[5px]">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src={`http://localhost:3000${product.images}`}
            alt={product.title}
            className="w-[400px] h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right: Details + Comments */}
        <div className="flex-1 flex flex-col space-y-6">
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-2xl font-semibold text-green-600 mt-2">
              ₹{product.price}
            </p>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg mt-2">⭐ {product.rating} / 5</p>

            <p className="mt-2">
              {product.in_stock ? (
                <span className="text-green-600 font-semibold">
                  In Stock ({product.quantity} left)
                </span>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="bg-[#af7f40] hover:bg-[#e9a54d] text-white px-6 py-2 rounded-lg shadow-md transition">
                Add to Cart
              </button>
              <button className="border border-[#af7f40] text-[#af7f40] hover:bg-[#af7f40] hover:text-white px-6 py-2 rounded-lg shadow-md transition">
                <Link to='/list'>Buy Now</Link>
              </button>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {product.comments && product.comments.length > 0 ? (
                product.comments.map((c, index) => (
                  <li key={index} className="p-3 rounded-lg bg-gray-50">
                    <p className="font-medium">{c.user}</p>
                    <p>{c.comment}</p>
                    <p className="text-sm text-gray-500">{c.date}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
