/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfile from './UpdateProfile';
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Firebase",
];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>

      <Navbar />
      <div className="max-w-7xl mx-auto bg-gray-50 shadow-xl border border-gray-200 rounded-2xl my-10 p-10">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-6">
            <Avatar className="h-28 w-28">
              <AvatarImage
                className="rounded-full"
                src="https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2F7b8e5953-3f47-40a3-9fa6-db2e39aa383c.png&w=3840&q=25"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-3xl text-gray-900">Nikhil Sarak</h1>
              <p className="text-gray-500 max-w-lg">
                Passionate software developer with expertise in Java, React, and
                Web Development. A keen problem-solver, always looking to
                innovate and create impactful solutions.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)} // Correct way to handle state update in onClick
            className="bg-white border-2 shadow-lg border-black text-black font-semibold hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 flex items-center px-4 py-2 rounded-lg shadow-md"
          >
            <Pen className="mr-2" /> Edit Profile
          </Button>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">
            Contact Information
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-gray-500" />
            <span className="text-gray-700 text-base font-semibold">
              nikhil@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Contact className="text-gray-500" />
            <span className="text-gray-700 text-base font-semibold">
              +91 5678943232
            </span>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a third-year IT engineering student with extensive experience in
            Java, React, and app development. I have worked on multiple projects
            involving web and Android development, focusing on practical,
            real-world applications. I enjoy building scalable solutions and
            continuously improving my skills through coding competitions,
            internships, and hands-on learning.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-black font-semibold rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="mb-8 ">
          <Label className="text-xl font-semibold mb-2">Resume</Label>
          {isResume ? (
            <a
              href="https://leetcode.com/u/Nikhilsarak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-right"
            >
              <br />
              <br />
              Nikhil's Profile on LeetCode
            </a>
          ) : (
            <span className="text-gray-500">No resume available</span>
          )}
        </div>

        {/* Applied Jobs Section */}
      </div>
      <div className="max-w-7xl mx-auto bg-gray-50 shadow-xl border border-gray-200 rounded-2xl my-10 p-10">
        <div className="mb-8 bg-gray-100 rounded-xl mt-4 p-8">
          <h2 className="font-semibold text-xl font-bold text-gray-900 mb-4">
            Applied Jobs
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <AppliedJobTable />
          </ul>
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>

    </div>
  );
};

export default Profile;
