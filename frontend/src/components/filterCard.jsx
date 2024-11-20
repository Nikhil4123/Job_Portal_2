/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import attractive icons

const filterData = [
  {
    filterType: "Location",
    values: [
      "New York",
      "San Francisco",
      "Los Angeles",
      "Chicago",
      "Austin",
      "Miami",
      "Seattle",
      "Denver",
      "Boston",
      "Atlanta",
    ],
  },
  {
    filterType: "Job Type",
    values: ["Part Time", "Full Time"],
  },
  {
    filterType: "Industry",
    values: [
      "Information Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Retail",
      "Manufacturing",
      "Marketing",
      "Real Estate",
      "Transportation",
      "Hospitality",
    ],
  },
  {
    filterType: "Salary",
    values: ["5 LPA", "10 LPA", "15 LPA"],
  },
];

const FilterCard = () => {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [selectedValue, setSelectedValue] = useState({});

  // Function to toggle drawer
  const toggleDrawer = (index) => {
    setOpenDrawer(openDrawer === index ? null : index);
  };

  // Function to handle radio group selection
  const handleChange = (filterType, value) => {
    setSelectedValue((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Filter Jobs</h1>
      <hr className="border-gray-300 mb-4" />

      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          {/* Drawer Toggle with icon and smooth transition */}
          <h2
            className="text-md font-medium text-gray-700 mb-2 cursor-pointer flex justify-left  items-center"
            onClick={() => toggleDrawer(index)}
          >
            {data.filterType}
            {openDrawer === index ? (
              <FiChevronUp className="text-lg text-gray-600" />
            ) : (
              <FiChevronDown className="text-lg text-gray-600" />
            )}
          </h2>

          {/* Drawer Content with transition */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDrawer === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <RadioGroup
              value={selectedValue[data.filterType] || ""}
              onValueChange={(value) => handleChange(data.filterType, value)}
              className="space-y-1 pl-2"
            >
              {data.values.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center mb-2 space-x-2 p-1 rounded hover:bg-gray-100"
                >
                  <RadioGroupItem
                    id={item}
                    value={item}
                    className="w-4 h-4 border border-black bg-white rounded-full flex items-center justify-center"
                  >
                    {/* Use a visible checkmark when selected */}
                    <span className={`h-2 w-2 rounded-full ${
                      selectedValue[data.filterType] === item ? "bg-gray-800" : "opacity-0"
                    } transition-opacity group-data-[state=checked]:opacity-100`}></span>
                  </RadioGroupItem>
                  <Label htmlFor={item} className="text-sm text-black">
                    {item}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
