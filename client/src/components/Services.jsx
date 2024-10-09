/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Forex Trading",
      description: "Expert guidance in foreign exchange markets for maximum returns."
    },
    {
      title: "Stock Trading",
      description: "Strategic stock selection and portfolio management for long-term growth."
    },
    {
      title: "Cryptocurrency Trading",
      description: "Navigate the volatile crypto markets with our expert insights."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;