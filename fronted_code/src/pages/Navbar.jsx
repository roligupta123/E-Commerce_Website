import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbHomeHeart } from "react-icons/tb";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center w-full h-[80px] justify-between px-6 md:px-12">
        
        {/* Logo / Icon */}
        <div className="flex items-center">
          <TbHomeHeart className="h-[50px] w-[50px] text-[#CB9C5E]" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-8 text-lg text-[#CB9C5E] font-semibold">
            <Link to="/">Home</Link>
            <Link to="/list">Product</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Search */}
          <form className="hidden sm:flex items-center bg-pink-100 rounded-full px-3 py-1">
            <input
              type="text"
              className="text-[#CB9C5E] text-[16px] px-3 bg-transparent outline-none w-[120px] sm:w-[250px]"
              placeholder="Type Here..."
            />
            <FaSearch className="w-[20px] h-[20px] text-[#CB9C5E] ml-2" />
          </form>

          {/* SignIn & SignUp */}
          <div className="flex items-center gap-6 text-[#CB9C5E] font-semibold">
            <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
              rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
              hover:text-white hover:shadow-md">
              <Link to="/signin">SignIn</Link>
            </div>
            <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
              rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
              hover:text-white hover:shadow-md">
              <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              className="h-6 w-6 text-[#CB9C5E] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="h-6 w-6 text-[#CB9C5E] cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50 text-[#CB9C5E] font-semibold flex flex-col items-center gap-6 py-6 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/list" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <form className="flex items-center bg-pink-100 rounded-full px-3 py-1">
            <input
              type="text"
              className="text-[#CB9C5E] text-[16px] px-3 bg-transparent outline-none w-[180px]"
              placeholder="Type Here..."
            />
            <FaSearch className="w-[20px] h-[20px] text-[#CB9C5E] ml-2" />
          </form>

          <div className="flex items-center gap-6">
            <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
              rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
              hover:text-white hover:shadow-md">
              <Link to="/signin">SignIn</Link>
            </div>
            <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
              rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
              hover:text-white hover:shadow-md">
              <Link to="/signup">SignUp</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
