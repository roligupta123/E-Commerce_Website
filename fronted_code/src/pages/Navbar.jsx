import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { TbHomeHeart } from "react-icons/tb";
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center w-full h-[80px] justify-between px-6 md:px-12">
      <div className="flex items-center">
        <TbHomeHeart className="h-[70px] w-[70px] text-[#CB9C5E]" />
      </div>

      <div className="flex items-center gap-7">
        
        <div className="hidden md:flex items-center gap-8 text-lg text-[#CB9C5E] font-semibold">
          <Link to="/">Home</Link>
          <Link to="/list">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <form className="hidden sm:flex items-center bg-pink-100 rounded-full px-3 py-1">
          <input
            type="text"
            className="text-[#CB9C5E] text-[16px] px-3 bg-transparent outline-none w-[120px] sm:w-[250px]"
            placeholder="Type Here..."
          />
          <FaSearch className="w-[20px] h-[20px] text-[#CB9C5E] ml-2" />
        </form>

        {/* <div className="h-[40px] w-[40px] rounded-full bg-[#fdbc9b] flex items-center justify-center">
          <FaRegUser className="text-white h-[22px] w-[22px]" />
        </div> */}
        <div className="hidden md:flex items-center gap-6 text-[#CB9C5E] font-semibold">
          <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
          rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border-1 border-[#CB9C5E]
          hover:text-white hover:shadow-md"><Link to="/signin">SignIn</Link></div>
          <div className="text-[#CB9C5E] h-[35px] w-[70px] flex justify-center items-center
          rounded-lg cursor-pointer hover:scale-105 transition hover:bg-[#CB9C5E] border-1 border-[#CB9C5E]
          hover:text-white hover:shadow-md"><Link to="/signup">SignUp</Link></div>
        </div>
      </div>
       </div>
    </div>
  )
}