/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Navbar from "./../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setLoading } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import CursorTrail from "./CursorTrail";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const validateForm = () => {
    if (
      !input.fullname ||
      !input.email ||
      !input.phoneNumber ||
      !input.password ||
      !input.role
    ) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const submithandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formdata = new FormData();
    formdata.append("fullname", input.fullname);
    formdata.append("email", input.email);
    formdata.append("phoneNumber", input.phoneNumber);
    formdata.append("password", input.password);
    formdata.append("role", input.role);
    if (input.file) {
      formdata.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      console.log("here");

      const res = await axios.post(`${USER_API_END_POINT}/register`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(Array.from(formdata)); // This will log the form data as an array of key-value pairs

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "An error occurred.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <CursorTrail />
      <Navbar />
      <div className="flex p-8 mt-4 items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submithandler}
          className="w-1/2 bg-white/80  border border-gray-200 rounded-2xl p-8 my-6
                     shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
                     transform hover:scale-[1.02] transition-all duration-300
                     animate-fadeIn relative overflow-hidden
                     before:content-[''] before:absolute before:inset-0
                     before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:translate-x-[-200%] hover:before:translate-x-[200%]
                     before:transition-transform before:duration-1000"
        >
          <div className="relative z-10 space-y-4">
            <h1
              className="font-bold text-3xl mb-6 text-gray-800 
                          transform transition-all duration-300 hover:text-blue-600
                          relative after:content-[''] after:block after:w-0 after:h-0.5 
                          after:bg-blue-600 after:transition-all after:duration-300
                          hover:after:w-24"
            >
              Sign Up
            </h1>

            <div className="space-y-4">
              {/* Input Fields with Enhanced Styling */}
              <div className="group">
                <Label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-2 
                                                   transform transition-all duration-200 group-hover:text-blue-600"
                >
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  placeholder="Name"
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromLeft backdrop-blur-sm bg-white/90"
                />
              </div>

              <div className="group">
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2
                                                transform transition-all duration-200 group-hover:text-blue-600"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="nikhil@gmail.com"
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromRight backdrop-blur-sm bg-white/90"
                />
              </div>

              <div className="group">
                <Label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2
                                                      transform transition-all duration-200 group-hover:text-blue-600"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  placeholder="8208061528"
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromLeft backdrop-blur-sm bg-white/90"
                />
              </div>

              <div className="group">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2
                                                   transform transition-all duration-200 group-hover:text-blue-600"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromRight backdrop-blur-sm bg-white/90"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <RadioGroup
                  defaultValue="comfortable"
                  className="flex items-center gap-6 animate-fadeIn"
                >
                  <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
                    <Input
                      id="student"
                      type="radio"
                      name="role"
                      value="student"
                      onChange={changeEventHandler}
                      className="cursor-pointer w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor="student" className="cursor-pointer">
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
                    <Input
                      id="recruiter"
                      type="radio"
                      name="role"
                      value="recruiter"
                      onChange={changeEventHandler}
                      className="cursor-pointer w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor="recruiter" className="cursor-pointer">
                      Recruiter
                    </Label>
                  </div>
                </RadioGroup>

                <div className="group">
                  <Label
                    htmlFor="profile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Profile Picture
                  </Label>
                  <Input
                    id="profile"
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="cursor-pointer file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-blue-50 file:text-blue-700
                             hover:file:bg-blue-100
                             transition-all duration-200"
                  />
                </div>
              </div>

              {loading ? (
                <Button className="w-full py-3 bg-gray-100 rounded-lg transform transition-all duration-200">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg
                           transform hover:scale-[1.02] transition-all duration-200
                           hover:shadow-lg hover:shadow-blue-300/50
                           relative overflow-hidden group"
                >
                  <span className="relative z-10">Sign Up</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Button>
              )}

              <div className="text-center animate-fadeIn">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 font-medium hover:text-blue-800 
                             transition-colors duration-200 hover:underline
                             relative after:content-[''] after:absolute after:bottom-0 
                             after:left-0 after:w-full after:h-px after:bg-blue-600 
                             after:transform after:scale-x-0 hover:after:scale-x-100
                             after:transition-transform after:duration-300"
                  >
                    Login
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
