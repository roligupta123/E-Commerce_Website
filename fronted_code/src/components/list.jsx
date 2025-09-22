import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  if (products.length === 0) {
    return <p className="p-4">Loading products...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="shadow-lg rounded-xl border-none  p-4">
            <img
              src={`http://localhost:3000${product.image}`}
              alt={product.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h1 className="text-xl font-bold mb-1">{product.title}</h1>
            <p>⭐ {product.rating} / 5</p>

            <Link
              to={`/list/${product.id}`}
              className="block mt-3 text-center bg-[#af7f40] hover:bg-[#e9a54d] text-white py-2 rounded-lg cursor-pointer shadow-md transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
