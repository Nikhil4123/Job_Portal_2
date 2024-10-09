/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 TradePro. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-blue-200">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-blue-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;