import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        navigate("/"); // ✅ go to home after login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[580px]">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          <h1 className="text-2xl font-bold text-center mb-6">🙎‍♂️ Sign In</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700 mb-1 font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#af7f40] hover:bg-[#e9a54d] text-white py-2 rounded-lg
              cursor-pointer shadow-md hover:scale-102 transition text-xl"
            >
              Sign In
            </button>
          </form>
          <p className="text-md text-center text-gray-600 mt-4">
            If don't have an account?{" "}
            <a href="/signup" className="text-[#CB9C5E] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
