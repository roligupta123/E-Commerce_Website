import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
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
      const res = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message); 
        navigate("/signin"); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[580px]">
        <div className="w-full max-w-md bg-white p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] mt-8">
          <h1 className="text-2xl font-bold text-center text-[#CB9C5E]">
            🙎‍♂️ Sign Up
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Inputs same as before */}
            <div>
              <label className="text-gray-700 font-bold mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              User
            </label>

            <label className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              Admin
            </label>

            <button
              type="submit"
              className="w-full bg-[#af7f40] hover:bg-[#e9a54d] text-white py-2 rounded-lg
              cursor-pointer shadow-md hover:scale-102 transition text-xl"
            >
              Sign Up
            </button>
          </form>

          <p className="text-md text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-[#e9a54d] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
