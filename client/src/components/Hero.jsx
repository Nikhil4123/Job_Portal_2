/* eslint-disable no-unused-vars */
import React from 'react';
import tradingVideo from '../assets/vecteezy_forex-trading-investor-financial-analyst-stock-market-chart_26389055.mp4';

const Hero = () => {
  return (
    <>
      {/* Original version for small and large screens */}
      <section className="relative  h-screen mb-6 overflow-hidden hidden items-center sm:flex md:hidden lg:flex justify-center">
        {/* Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={tradingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">TradePro</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Expert trading solutions for your financial growth and success
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-center"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-900 transition-all duration-300 inline-block text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New version for medium screens */}
      <section className="relative h-screen overflow-hidden hidden md:flex lg:hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={tradingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-70"></div>

        <div className="relative z-10 h-full flex justify-center items-center">
          <div className="w-full px-8">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight text-white text-center">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">TradePro</span>
            </h1>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto text-center">
              Expert trading solutions for your financial growth and success
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block text-center"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-900 transition-all duration-300 inline-block text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;