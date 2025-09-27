import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import Footer from '../pages/footer'
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    
    if (formData.email === "" || formData.password === ""){
      alert("Please fill all fields!");
    } else {
      alert(`Welcome ${formData.email}`);
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center mt-19">
      <div className="w-[350px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-2xl p-6">
        
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#CB9C5E] text-white flex items-center justify-center rounded-full text-lg font-semibold">
            Logo
          </div>
        </div>

        
        <h2 className="text-2xl font-bold text-center text-[#CB9C5E]">
          Welcome back !
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">User Login</p>

        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 outline-none py-2 mb-4 text-gray-700"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-b border-gray-300 outline-none py-2 mb-6 text-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-[#CB9C5E] text-white py-2 rounded-full font-medium"
          >
            Login
          </button>
        </form>

        
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <a href="#" className="hover:text-blue-500">
            Forgot Password
          </a>
          <a href="/signup" className="hover:text-blue-500">
            Register
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
