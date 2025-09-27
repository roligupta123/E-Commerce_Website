import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        
        <div className="space-y-6">
          
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-xl text-white" />
            <div>
              <p className="font-semibold text-white">21 Revolution Street</p>
              <p>Bhadohi ,UP</p>
            </div>
          </div>

          
          <div className="flex items-start space-x-4">
            <FaPhone className="text-xl text-white" />
            <div>
              <p className="font-semibold text-white">+8381837600</p>
            </div>
          </div>

        
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-xl text-white" />
            <div>
              <a href="mailto:support@company.com" className="text-blue-400 hover:underline">
                guptaroli067@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">About the company</h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit,
            eu auctor lacus vehicula sit amet.
          </p>

          
          <div className="flex space-x-4">
            <a href="facebook.com" className="bg-gray-800 hover:bg-blue-600 p-3 rounded">
              <FaFacebookF />
            </a>
            <a href="twitter.com" className="bg-gray-800 hover:bg-blue-400 p-3 rounded">
              <FaTwitter />
            </a>
            <a href="linkedinin.com" className="bg-gray-800 hover:bg-blue-700 p-3 rounded">
              <FaLinkedinIn />
            </a>
            <a href="github.com" className="bg-gray-800 hover:bg-gray-600 p-3 rounded">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
}
