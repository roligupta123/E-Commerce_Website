import React, { useState } from 'react'
import Navbar from './Navbar'
import Electronic from '../assets/electronic.jpg'
import contact from '../assets/contact.avif'

export default function ContactPage() {
  return (
    <div className="h-[650px]">
    <Navbar />
    <div className="">
      <div className="max-w-6xl mx-auto p-6 space-y-10 ">
      <div className="text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-[#CB9C5E]">Contact Us</h1>
      </div>
    </div>
    <div className="bg-white w-[1000px] ml-[180px] p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] flex justify-center">
      <div className="w-[600%] p-3 space-y-3">
      <h1 className="text-2xl font-bold text-center text-[#CB9C5E]">📞 Contact</h1>
      <form action="" className="space-y-8">
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
        <button type="submit" className="w-full font-semibold bg-[#af7f40] hover:bg-[#e9a54d] text-white py-2 rounded-lg
        cursor-pointer shadow-md hover:scale-102 transition">
            Send Message
        </button>
      </form>
      </div>
      <img src={contact} alt="" className="w-[500%] h-[500px]"/>
    </div>
    
    </div>
    </div>
  )
}