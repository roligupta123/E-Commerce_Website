import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Electronic from '../assets/electronic.jpg'

export default function ContactPage() {
  return (
    <div className="bg-gray-200 h-[650px]">
    <Navbar />
    <div className="">
      <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-[#3a4664]">Contact Our E-Commerce Website</h1>
      </div>
    </div>
    <div className="bg-white w-[1000px] ml-[180px] p-8 rounded-2xl shadow-md flex justify-center">
      <div className="w-[600%] p-3 space-y-3">
      <h1 className="text-2xl font-bold text-center">📞 Contact</h1>
      <form action="" className="space-y-4">
        <div>
          <label className="text-gray-700 font-bold">Username</label>
          <input type="text" placeholder="Enter username" className="w-full px-4 py-2 border rounded-lg"/>
        </div>
        <div>
          <label className="text-gray-700 font-bold">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg"/>
        </div>
        <div>
          <label className="text-gray-700 font-bold">Message</label>
          <textarea type="text" placeholder="Type here message" rows="4" className="w-full px-4 py-2 border rounded-lg"/>
        </div>
        <button type="submit" className="w-full font-semibold bg-[#3a4664] text-white py-2 rounded-lg">
            Send Message
        </button>
      </form>
      </div>
      <img src={Electronic} alt="" className="w-[500px] h-[400px]"/>
    </div>
    
    </div>
    </div>
  )
}