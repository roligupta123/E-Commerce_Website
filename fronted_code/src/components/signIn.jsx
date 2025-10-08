import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
import Cookies from "js-cookie";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", 
      });

      const data = await response.json();
      console.log("Backend response:", data);

      if (response.ok) {
        // ✅ token cookie me already set ho gaya backend se
        // ab sirf user info local cookie me save kar lo
        if (data.user) {
          Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
        }

        // alert(`Welcome ${data.user?.username || "User"}!`);
        
        window.location.href = "/";
      } else {
        alert(data.message || "Invalid login credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-19">
        <div className="w-[350px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-center text-[#CB9C5E]">
            Welcome back!
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
        </div>
      </div>
      <Footer />
    </>
  );
}
