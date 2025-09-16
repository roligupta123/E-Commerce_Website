import React, { useEffect, useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products") // backend returns array
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  if (products.length === 0) {
    return <p className="p-4">Loading products...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="shadow-lg rounded-xl border p-4">
          <img
            src={`http://localhost:3000${product.image}`}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h1 className="text-xl font-bold mb-1">{product.title}</h1>
          <p className="text-gray-600 mb-1">{product.category}</p>
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

          <h2 className="text-lg font-semibold mt-2">Comments</h2>
          <ul className="space-y-1">
            {product.comments && product.comments.map((c, index) => (
              <li key={index} className="border p-1 rounded">
                <p className="font-medium">{c.user}</p>
                <p>{c.comment}</p>
                <p className="text-sm text-gray-500">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
