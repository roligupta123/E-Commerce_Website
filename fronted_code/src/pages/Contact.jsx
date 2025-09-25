
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import contact from "../assets/contact.avif";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-8">
        <div className="max-w-6xl w-full h-[550px] grid grid-cols-1 md:grid-cols-2 mt-[-20px] gap-12 bg-[#faf8f5] p-8 rounded-2xl shadow-lg">

          <div className="flex justify-center items-center">
            <img
              src={contact}
              alt="contact"
              className="rounded-xl shadow-lg  h-[500px] w-full object-cover mb-[100px]"
            />
          </div>

          <div className="flex flex-col justify-center mb-[100px]">
            <h1 className="text-4xl font-bold text-[#CB9C5E] mb-6">Contact Us</h1>

            <form className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b-2 border-[#CB9C5E] outline-none p-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border-b-2 border-[#CB9C5E] outline-none p-2 bg-transparent"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="border-b-2 border-[#CB9C5E] outline-none p-2 bg-transparent"
              ></textarea>

              <button className="bg-[#CB9C5E] text-white py-2 text-xl rounded-full hover:bg-[#CB9C5E] transition">
                Contact Us
              </button>
            </form>

            <div className="mt-8 text-[#CB9C5E]  space-y-2">
              <p>
                <strong>Contact:</strong> guptaroli067@gmail.com
              </p>
              <p>
                <strong>Based in:</strong> Bhadohi , UP ,India
              </p>
            </div>

            
            <div className="flex space-x-6 mt-6 text-2xl text-[#CB9C5E] ">
              <FaFacebook className="cursor-pointer hover:text-[#CB9C5E] " />
              <FaInstagram className="cursor-pointer hover:text-[#CB9C5E] " />
              <FaTwitter className="cursor-pointer hover:text-[#CB9C5E] " />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
