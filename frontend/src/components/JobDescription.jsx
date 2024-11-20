/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const isApplied = true;

const responsibilities = [
  "Build and maintain responsive websites using HTML, CSS, JavaScript, and React.",
  "Collaborate with designers and backend developers to create seamless user experiences.",
  "Optimize web applications for maximum speed and scalability.",
  "Ensure the technical feasibility of UI/UX designs.",
  "Write clean, maintainable, and efficient code.",
];

const requiredSkills = [
  "Strong proficiency in JavaScript, including DOM manipulation and JavaScript object model.",
  "Thorough understanding of React.js and its core principles.",
  "Experience with popular React.js workflows (such as Redux).",
  "Familiarity with newer specifications of EcmaScript.",
  "Familiarity with RESTful APIs and GraphQL.",
];

const JobDescription = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-300 rounded-3xl my-12 p-10">
      {/* Job Title and Company */}
      <div className="text-center mb-8">
        <div className= "flex bg-violet-400 lg:max-w-4 xl:max-w-10 md:max-w-12 rounded-2xl justify-center p-2">
        <ArrowLeft onClick={() => window.history.back()} />

        </div>
        
        <h1 className="text-4xl font-bold text-purple-700 mb-2">
          Front-End Developer
        </h1>
        <p className="text-lg text-gray-600 font-semibold">at Google</p>
      </div>

      {/* Job Details Section */}
      <div className="mb-10 p-8 bg-gradient-to-r from-purple-50 via-gray-50 to-blue-50 shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center tracking-wide">
          Job Details
        </h2>
        <div className="grid grid-cols-3 gap-8 text-lg">
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">📍 Location:</span>
            <span className="text-gray-900 font-semibold">Remote</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">💰 Salary:</span>
            <span className="text-gray-900 font-semibold">
              $80,000 - $100,000 / year
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">🛠 Experience:</span>
            <span className="text-gray-900 font-semibold">3+ years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">📋 Job Type:</span>
            <span className="text-gray-900 font-semibold">Full-time</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">📅 Start Date:</span>
            <span className="text-gray-900 font-semibold">July 2024</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium">
              ⌛ Application Deadline:
            </span>
            <span className="text-gray-900 font-semibold">June 2024</span>
          </div>
        </div>
      </div>

      {/* Job Responsibilities */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Required Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Required Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          {requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="text-center mt-10">
        <Button
          className={`px-8 py-3 text-lg font-bold rounded-2xl transition-all duration-300 shadow-md ${
            isApplied
              ? "bg-gray-600 text-white cursor-not-allowed opacity-70"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
          }`}
          disabled={isApplied}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
    </div>
  );
};

export default JobDescription;
