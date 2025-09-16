import React from "react";
import Navbar from "../components/Navbar";
import Roli from '../assets/roli.png'
import Makup from '../assets/makup.jpg'
import Men from '../assets/men.jpg'
import Electronic from '../assets/electronic.jpg'
import Women from '../assets/women.jpg'


export default function About() {
  return (
    <div className="bg-gray-200">
    <Navbar />
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#3a4664]">About Our E-Commerce Website</h1>
        <p className="text-gray-600 text-lg md:text-xl">
          We provide the best products with top-notch quality and unbeatable prices.
        </p>
      </div>
    </div>
    
      <div className=''>
      <div className="flex items-center justify-between w-full h-[300px] gap-[100px] p-5">
        <p className="text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sunt adipisci accusantium fugit quae voluptatem similique aliquid quia ea pariatur, quaerat ex aspernatur laboriosam officiis odit? Quis porro consectetur dolorem? Totam minus nulla, est molestiae nihil, laboriosam ut aut eaque placeat maxime itaque error hic possimus veniam porro facere voluptatem autem perferendis, accusantium consequuntur eos mollitia! Sapiente, perferendis hic maiores voluptatum deserunt error necessitatibus expedita assumenda excepturi enim delectus fugit.</p>
        <img src={Men} alt="" className="w-[100%] h-[300px] rounded-lg"/>
      </div>
      <div className="flex items-center justify-between w-full h-[300px] gap-[100px] p-5">
        <img src={Makup} alt="" className="w-[250%] h-[300px] rounded-lg"/>
        <p className="text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sunt adipisci accusantium fugit quae voluptatem similique aliquid quia ea pariatur, quaerat ex aspernatur laboriosam officiis odit? Quis porro consectetur dolorem? Totam minus nulla, est molestiae nihil, laboriosam ut aut eaque placeat maxime itaque error hic possimus veniam porro facere voluptatem autem perferendis, accusantium consequuntur eos mollitia! Sapiente, perferendis hic maiores voluptatum deserunt error necessitatibus expedita assumenda excepturi enim delectus fugit.</p>
      </div>
      <div className="flex items-center justify-between w-full h-[300px] gap-[100px] p-5">
        <p className="text-[17px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sunt adipisci accusantium fugit quae voluptatem similique aliquid quia ea pariatur, quaerat ex aspernatur laboriosam officiis odit? Quis porro consectetur dolorem? Totam minus nulla, est molestiae nihil, laboriosam ut aut eaque placeat maxime itaque error hic possimus veniam porro facere voluptatem autem perferendis, accusantium consequuntur eos mollitia! Sapiente, perferendis hic maiores voluptatum deserunt error necessitatibus expedita assumenda excepturi enim delectus fugit.</p>
        <img src={Women} alt="" className="w-[250%] h-[300px] rounded-lg"/>
      </div>
      </div>
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#3a4664]">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div className="p-4 bg-gray-100 shadow rounded-lg border border-[2px] border-[#3a4664] text-center">
            <img
              src={Roli}
              alt="Team Member"
              className="w-30 h-24 mx-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Roli Gupta</h3>
            <p className="text-gray-500">Fronted Master</p>
          </div>

          <div className="p-4 bg-gray-100 shadow rounded-lg border border-[2px] border-[#3a4664] text-center">
            <img
              src={Roli}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Anchal Maurya</h3>
            <p className="text-gray-500">Database Master</p>
          </div>

          <div className="p-4 bg-gray-100 shadow rounded-lg border border-[2px] border-[#3a4664] text-center">
            <img
              src={Roli}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Zainab Fatma</h3>
            <p className="text-gray-500">Backend Master</p>
          </div>

          <div className="p-4 bg-gray-100 shadow rounded-lg border border-[2px] border-[#3a4664] text-center">
            <img
              src={Roli}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Aadil Shah</h3>
            <p className="text-gray-500">Admin Handler</p>
          </div>
          
        </div>
        <div className="w-[100%] h-[90px] bg-gray-300 flex items-center justify-center">
          <p className="text-center font-semibold md:text-3xl text-[#3a4664]">
          Thanks for visit my Website 🙏🙏🙏
        </p>
        </div>
    </div>
    </div>
  );
}
