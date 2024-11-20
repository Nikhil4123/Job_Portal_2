/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./filterCard";
import Job from "./Job";

const jobarray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16.17,18,19,20];

const Jobs = () => {
  return (
    <div className="mt-4 p-4">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 p-4">
        <div className="flex gap-5">
          <div className="w-1/3">
            <FilterCard />
          </div>
          <div>
          {jobarray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh]  p-4 overflow-x-auto overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobarray.map((item, index) => (
                  <div key={index}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
