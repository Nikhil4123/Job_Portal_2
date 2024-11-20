/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import JobAnimation from "./Animations/JobAnimation.jsx"; // Import the JobAnimation component

const HeroSection = () => {
  return (
    <div className="text-center overflow-hidden bg-gradient-to-b from-white via-gray-100 to-gray-200 py-16 relative">
      <JobAnimation /> {/* Add the JobAnimation component here */}
      <div className="flex flex-col gap-5 my-10 animate-fade-in">
        {/* Tagline */}
        <span className="mx-auto mt-10 mb-2 px-4 py-2 rounded-full bg-gray-100 text-[#f31b3b] ">
          No 1 Job Hunt Website
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-slide-in">
          Search, Apply & <br />
          <span className="text-[#ed320d] animate-text-glow">
            Get Your Dream JOB
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-lg mx-auto mt-4 mb-8 px-4 leading-relaxed">
          Join thousands of users and make your next career move with ease. Find the best
          opportunities tailored just for you.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg mx-auto shadow-lg border border-gray-300 rounded-full gap-3 px-4 py-2 animate-fade-in-up">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none bg-transparent border-none w-full"
          />
          <Button className="rounded-full bg-[#ba35f8] hover:bg-[#9a2bc0] transition duration-300 ease-in-out">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
