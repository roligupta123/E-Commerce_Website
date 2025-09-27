import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import contact from "../assets/contact.avif";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-6 sm:p-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#faf8f5] p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">

          {/* Left Image */}
          <div className="flex justify-center items-center">
            <img
              src={contact}
              alt="contact"
              className="rounded-xl shadow-lg w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#CB9C5E] mb-6 text-center md:text-left">
              Contact Us
            </h1>

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

              <button className="bg-[#CB9C5E] text-white py-2 text-lg sm:text-xl rounded-full hover:bg-[#b38245] transition">
                Contact Us
              </button>
            </form>

            <div className="mt-6 sm:mt-8 text-[#CB9C5E] space-y-2 text-center md:text-left">
              <p>
                <strong>Contact:</strong> guptaroli067@gmail.com
              </p>
              <p>
                <strong>Based in:</strong> Bhadohi , UP , India
              </p>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl text-[#CB9C5E]">
              <FaFacebook className="cursor-pointer hover:text-[#b38245]" />
              <FaInstagram className="cursor-pointer hover:text-[#b38245]" />
              <FaTwitter className="cursor-pointer hover:text-[#b38245]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
