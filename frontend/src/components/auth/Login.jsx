/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "./../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import CursorTrail from "./CursorTrail"; 

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading,user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      console.log(`${USER_API_END_POINT}`)
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
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
  useEffect(()=>{
    if(user){
        navigate("/");
    }
},[])

  return (
    <div className="min-h-screen  from-blue-50 to-white ">
      <CursorTrail /> {/* Add the cursor trail component */}
      <Navbar />
      <div className="flex p-8 mt-8 items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submithandler}
          className="w-1/2 bg-white/80  border border-gray-200 rounded-2xl p-8 my-10 
                     shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
                     transform hover:scale-[1.02] transition-all duration-300
                   "
        >
          <div className="relative z-10">
            <h1 className="font-bold text-3xl mb-6 text-gray-800 
                          transform transition-all duration-300 hover:text-blue-600
                          relative after:content-[''] after:block after:w-0 after:h-0.5 
                          after:bg-blue-600 after:transition-all after:duration-300
                          hover:after:w-20">
              Login
            </h1>

            <div className="space-y-6">
              <div className="group">
                <Label className="block text-sm font-medium text-gray-700 mb-2 
                                transform transition-all duration-200 group-hover:text-blue-600">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="nikhil@gmail.com"
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromLeft backdrop-blur-sm bg-white/90"
                />
              </div>

              <div className="group">
                <Label className="block text-sm font-medium text-gray-700 mb-2
                                transform transition-all duration-200 group-hover:text-blue-600">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={changeEventHandler}
                  className="w-full p-3 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-blue-400 focus:border-transparent
                           transition-all duration-200 hover:border-blue-400
                           animate-slideInFromRight backdrop-blur-sm bg-white/90"
                />
              </div>

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
                  <Label htmlFor="student" className="cursor-pointer">Student</Label>
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
                  <Label htmlFor="recruiter" className="cursor-pointer">Recruiter</Label>
                </div>
              </RadioGroup>

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
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              )}

              <div className="text-center mt-6 animate-fadeIn">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 font-medium hover:text-blue-800 
                             transition-colors duration-200 hover:underline
                             relative after:content-[''] after:absolute after:bottom-0 
                             after:left-0 after:w-full after:h-px after:bg-blue-600 
                             after:transform after:scale-x-0 hover:after:scale-x-100
                             after:transition-transform after:duration-300"
                  >
                    Sign Up
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

export default Login;