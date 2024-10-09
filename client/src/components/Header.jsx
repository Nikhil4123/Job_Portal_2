/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-2  border-spacing-2  bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <h1 className="text-2xl font-bold tracking-tight">TradePro</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            <NavItem href="#about" mobile>About</NavItem>
            <NavItem href="#services" mobile>Services</NavItem>
            <NavItem href="#contact" mobile>Contact</NavItem>
          </ul>
        )}
      </div>
    </header>
  );
};

const NavItem = ({ href, children, mobile }) => (
  <li>
    <a
      href={href}
      className={`
        ${mobile ? 'block py-2' : ''}
        text-gray-300 hover:text-white transition-colors duration-300
        border-b-2 border-transparent hover:border-blue-400
      `}
    >
      {children}
    </a>
  </li>
);

export default Header;