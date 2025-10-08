import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TbHomeHeart } from "react-icons/tb";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Cookies from "js-cookie";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Check cookie for user info
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie);
        setUser(parsedUser);
      } catch (err) {
        console.error("Invalid user cookie:", err);
        Cookies.remove("user");
      }
    }
  }, []);

  // ✅ Logout logic
  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("user");
    setUser(null);
    setMenuOpen(false);
    navigate("/signin");
  };

  return (
    <div className="w-full bg-white sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 h-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <TbHomeHeart className="h-[60px] w-[60px] text-[#CB9C5E] cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {/* Links */}
          <div className="flex items-center gap-8 text-lg text-[#CB9C5E] font-semibold">
            <Link to="/list" className="hover:text-[#b07c3d]">Product</Link>
            <Link to="/about" className="hover:text-[#b07c3d]">About</Link>
            <Link to="/contact" className="hover:text-[#b07c3d]">Contact</Link>
          </div>

          {/* Search Bar */}
          <form className="hidden sm:flex items-center bg-pink-100 rounded-full px-3 py-1">
            <input
              type="text"
              className="text-[#CB9C5E] text-[16px] px-3 bg-transparent outline-none w-[120px] sm:w-[250px]"
              placeholder="Type Here..."
            />
            <FaSearch className="w-[20px] h-[20px] text-[#CB9C5E] ml-2" />
          </form>

          {/* User Section */}
          <div className="flex items-center gap-6 text-[#CB9C5E] font-semibold">
            {user ? (
              <>
                {/* Username */}
                <div className="flex items-center gap-2">
                  <FaRegUser className="h-[25px] w-[25px]" />
                  <span className="font-medium text-[18px] capitalize">
                    {user.username}
                  </span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="text-[#CB9C5E] h-[35px] w-[85px] flex justify-center items-center
                  rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
                  hover:text-white hover:shadow-md"
                >
                  Logout
                </button>

                {/* Cart */}
                <Link to="/card">
                  <FaCartShopping className="h-[30px] w-[30px] cursor-pointer" />
                </Link>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  to="/signin"
                  className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
                  rounded-lg border border-[#CB9C5E] hover:bg-[#CB9C5E] hover:text-white hover:scale-105 transition"
                >
                  SignIn
                </Link>

                {/* Sign Up */}
                <Link
                  to="/signup"
                  className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
                  rounded-lg border border-[#CB9C5E] hover:bg-[#CB9C5E] hover:text-white hover:scale-105 transition"
                >
                  SignUp
                </Link>

                {/* Cart */}
                <Link to="/card">
                  <FaCartShopping className="h-[30px] w-[30px] cursor-pointer" />
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50 text-[#CB9C5E] font-semibold flex flex-col items-center gap-6 py-6 shadow-lg">
          <Link to="/list" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Search */}
          <form className="flex items-center bg-pink-100 rounded-full px-3 py-1">
            <input
              type="text"
              className="text-[#CB9C5E] text-[16px] px-3 bg-transparent outline-none w-[180px]"
              placeholder="Type Here..."
            />
            <FaSearch className="w-[20px] h-[20px] text-[#CB9C5E] ml-2" />
          </form>

          {/* User logic in mobile */}
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <FaRegUser className="h-[40px] w-[40px]" />
                <span className="font-medium text-[17px] capitalize">{user.username}</span>
              </div>

              <button
                onClick={handleLogout}
                className="text-[#CB9C5E] h-[35px] w-[90px] flex justify-center items-center
                rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border border-[#CB9C5E]
                hover:text-white hover:shadow-md"
              >
                Logout
              </button>

              <Link to="/card" onClick={() => setMenuOpen(false)}>
                <FaCartShopping className="h-[30px] w-[30px] cursor-pointer" />
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-5">
                <Link
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
                  rounded-lg border border-[#CB9C5E] hover:bg-[#CB9C5E] hover:text-white hover:scale-105 transition"
                >
                  SignIn
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
                  rounded-lg border border-[#CB9C5E] hover:bg-[#CB9C5E] hover:text-white hover:scale-105 transition"
                >
                  SignUp
                </Link>
                <Link to="/card" onClick={() => setMenuOpen(false)}>
                  <FaCartShopping className="h-[30px] w-[30px] cursor-pointer" />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
