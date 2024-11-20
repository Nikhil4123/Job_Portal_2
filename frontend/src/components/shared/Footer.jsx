/* eslint-disable no-unused-vars */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-teal-400 mb-4">JobPortal</h2>
            <p className="text-gray-300">Helping you find the best jobs suited <br /> for your skills.</p>
            <p className="text-gray-400 mt-2">Location: 123 Street, India</p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-purple-500 mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="/jobs" className="hover:text-green-400 transition-colors">Jobs</a></li>
              <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-300 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-6 text-gray-500">
          <p>&copy; 2024 JobPortal. All rights reserved.</p>
          <p className="hover:text-purple-400 cursor-pointer transition-colors">Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
