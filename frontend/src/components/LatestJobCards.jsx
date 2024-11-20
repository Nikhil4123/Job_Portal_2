/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="job-card bg-white border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="company-info mb-4">
        <h1 className="company-name text-gray-900 text-xl font-semibold">
          Company Name
        </h1>
        <p className="company-location text-gray-500">Location: India</p>
      </div>
      <div className="job-details mb-4">
        <h2 className="job-title font-bold font- text-gray-800 text-lg font-medium">
          Job Title
        </h2>
        <p className="job-description text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className=" flex space-x-3">
        <Badge
          className="bg-white text-blue-800 font-bold hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800"
          key="position-badge"
        >
          12 Positions
        </Badge>
        <Badge
          className="bg-white text-teal-800 font-bold hover:bg-white hover:text-teal-800 focus:bg-white focus:text-teal-800"
          key="part-time-badge"
        >
          Part Time
        </Badge>
        <Badge
          className="bg-white text-orange-700 font-bold hover:bg-white hover:text-orange-700 focus:bg-white focus:text-orange-700"
          key="lpa-badge"
        >
          LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
