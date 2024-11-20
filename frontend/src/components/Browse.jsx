/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10 "> Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;