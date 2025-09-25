import Navbar from '../pages/Navbar'
import Electronic from '../assets/electronic.jpg'
import Women from '../assets/women.jpg'
import buity from '../assets/buity_1.jpg'
import buity1 from '../assets/buity.jpg'
import { RiLuggageCartFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom'
import Footer from '../pages/footer'

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 gap-10">
      <div className="flex flex-col items-start text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-400 leading-tight">
          e-commerce Website
        </h1>
        <span className="text-lg md:text-2xl text-[#CB9C5E] mt-2 tracking-[8px]">
          SUPPORT LOCAL EVERYTHING
        </span>

        <div className="w-full sm:w-[200px] bg-pink-100 rounded-2xl p-4 mt-6">
          <span className="block text-[#CB9C5E] font-medium">Choose your</span>
          <div className="flex items-center gap-2 mt-3">
            <div className="h-8 w-8 bg-[#fdbc9b] rounded-full flex items-center justify-center text-white">
              <IoIosArrowDown className='text-[#CB9C5E] font-semibold text-2xl'/>
            </div>
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-white">
              <span className='text-[#CB9C5E] text-[15px]'>2</span>
            </div>
            <div className="h-8 w-8 bg-[#fdbc9b] rounded-full flex items-center justify-center text-white">
              <IoIosArrowUp className='text-[#CB9C5E] text-2xl'/>
            </div>
          </div>
        </div>

        <div className="bg-[#CB9C5E] h-14 w-full sm:w-[250px] rounded-full mt-6 flex items-center justify-start px-4 gap-3 cursor-pointer shadow-md hover:scale-105 transition">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <RiLuggageCartFill className="text-[#CB9C5E] text-xl" />
          </div>
          <span className="text-white text-lg font-medium tr"><Link to="./list">Buy Now</Link></span>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="relative">
          <div className="left-0 bottom-20 absolute bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)]  h-12 w-50 rounded-full flex items-center justify-center">
            <span className="text-[#CB9C5E] font-semibold">Minimalistic</span>
          </div>
          <div className="right-0 top-15 absolute bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] h-12 w-50 rounded-full flex items-center justify-center">
            <span className="text-[#CB9C5E] font-semibold">iSuper cozy!</span>
          </div>
          <img
            src={buity} alt="Main"
            className="w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[650px] lg:h-[470px] rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="flex lg:flex-col gap-4">
          <img
            src={buity1} alt=""
            className="w-32 h-20 md:w-48 md:h-35 rounded-full object-cover shadow-lg"
          />
          <img
            src={Electronic} alt=""
            className="w-32 h-20 md:w-48 md:h-35 rounded-full object-cover shadow-lg"
          />
          <img
            src={Women} alt=""
            className="w-32 h-20 md:w-48 md:h-35 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default home