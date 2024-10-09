/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import officeImage from '../assets/office2.jpg';
import traderImage from '../assets/office3.jpg';

const OfficeImage = ({ location }) => (
  <div className="relative">
    <img 
      src={officeImage} 
      alt={`${location} Office`} 
      className="rounded-lg shadow-lg w-full h-48 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
      <p className="text-white text-sm font-semibold">{location} Office</p>
    </div>
  </div>
);

const TraderImage = () => (
  <div className="relative">
    <img 
      src={traderImage} 
      alt="Professional Trader" 
      className="rounded-lg shadow-2xl w-full h-96 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <p className="text-white text-lg font-semibold">John Doe, Lead Trader</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Our Trading Firm</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <TraderImage />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Expert Trading Solutions</h3>
            <p className="text-lg mb-6 text-gray-600">
              With over 15 years of experience in the financial markets, our team of expert traders has 
              helped countless individuals and institutions achieve their financial goals through 
              strategic trading and investment management.
            </p>
            <p className="text-lg mb-6 text-gray-600">
              We specialize in forex, stocks, and cryptocurrency trading, providing personalized 
              strategies tailored to each client&lsquo;s risk tolerance and investment objectives. Our 
              state-of-the-art trading floor and advanced analytics tools give us the edge in today&lsquo;s 
              fast-paced markets.
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-700">Our Offices</h4>
              <div className="grid grid-cols-3 gap-4">
                <OfficeImage location="New York" />
                <OfficeImage location="London" />
                <OfficeImage location="Tokyo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;