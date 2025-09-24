import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../pages/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) {
    return <p className="p-4">Loading product details...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-xl border">
        <img
          src={`http://localhost:3000${product.image}`}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg font-semibold text-green-600 mb-2">₹{product.price}</p>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="mb-2">⭐ {product.rating} / 5</p>
        <p>
          {product.in_stock ? (
            <span className="text-green-600">In Stock ({product.quantity} left)</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        <h2 className="text-lg font-semibold mt-4">Comments</h2>
        <ul className="space-y-2">
          {product.comments &&
            product.comments.map((c, index) => (
              <li key={index} className="border p-2 rounded">
                <p className="font-medium">{c.user}</p>
                <p>{c.comment}</p>
                <p className="text-sm text-gray-500">{c.date}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
