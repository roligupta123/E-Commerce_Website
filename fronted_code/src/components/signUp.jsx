import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import sign from '../assets/sign.webp'
import Footer from '../pages/footer'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
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
      <div className="flex mt-5 items-center justify-center">
        <div className="w-[950px] h-[550px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-2xl flex overflow-hidden mt-6">
          {/* Left Section */}
          <div className="w-1/2 bg-teal-500 text-white flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold mt-25">Welcome Back!</h2>
            <p className="mb-6 text-center">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-teal-500 transition"
            >
              SIGN IN
            </button>
            <div className="mt-6">
              <img
                src={sign}
                alt="illustration"
                className="w-[300px] h-[80%] mx-auto rounded-lg"
              />
            </div>
          </div>
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-600 text-center mb-5">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-7 mb-20">
              <div className="flex items-center border px-3 py-2 rounded-md ">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center border px-3 py-2 rounded-md">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border px-3 py-2 rounded-md">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="flex items-center border px-3 py-2 rounded-md">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Role Selection */}
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2" >
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={formData.role === "user"}
                    onChange={handleChange}
                    className="accent-teal-500"
                  />
                  User
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === "admin"}
                    onChange={handleChange}
                    className="accent-teal-500"
                  />
                  Admin
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-full font-medium transition"
              >
                SIGN UP
              </button>
            </form>

            {/* <p className="text-md text-center text-gray-600">
              Already have an account?{" "}
              <a href="/signin" className="text-teal-500 hover:underline">
                Sign In
              </a>
            </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
