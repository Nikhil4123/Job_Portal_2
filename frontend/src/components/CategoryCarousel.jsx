/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const categories = [
  "Front-End Development",
  "Back-End Development",
  "Full-Stack Development",
  "Mobile App Development",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Machine Learning",
  "Artificial Intelligence",
  "Blockchain",
  "Game Development",
  "Database Management",
  "Testing & Quality Assurance",
];

const CategoryCarousel = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Explore Categories</h2>
      <Carousel className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg p-6 relative overflow-hidden">
        <CarouselContent className="flex gap-10">
          {categories.map((cat, index) => (
            <CarouselItem key={index} className="flex-none w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <Button className="w-full py-3 bg-violet-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-400 transition duration-300 ease-in-out shadow-lg">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-300 p-4 rounded-full hover:bg-gray-400 focus:outline-none transition-all duration-200"
          aria-label="Previous"
        />
        <CarouselNext
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none transition-all duration-200"
          aria-label="Next"
        />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
