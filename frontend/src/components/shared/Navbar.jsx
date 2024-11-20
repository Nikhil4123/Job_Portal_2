/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 animate-gradient-x"></div>

    {/* Floating Circles */}
    <div className="absolute top-0 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-float-slow"></div>
    <div className="absolute top-8 right-1/3 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-float-medium"></div>
    <div className="absolute bottom-4 left-1/3 w-6 h-6 bg-pink-500 rounded-full opacity-20 animate-float-fast"></div>

    {/* Geometric Shapes */}
    <div className="absolute top-6 right-1/4 w-12 h-12 border-2 border-blue-200/30 rotate-45 animate-spin-slow"></div>
    <div className="absolute bottom-8 right-1/2 w-8 h-8 border-2 border-purple-200/30 rotate-12 animate-spin-reverse"></div>
  </div>
);

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  const checkIsActive = (path) => {
    return window.location.pathname === path;
  };
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>

      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600 animate-bounce" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job Portal
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={() => {
                const isActive = checkIsActive("/");
                return `text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform relative group ${
                  isActive ? "text-blue-600 font-bold scale-105" : ""
                }`;
              }}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  checkIsActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>

            <NavLink
              to="/jobs"
              className={() => {
                const isActive = checkIsActive("/jobs");
                return `text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform relative group ${
                  isActive ? "text-blue-600 font-bold scale-105" : ""
                }`;
              }}
            >
              Jobs
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  checkIsActive("/jobs") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>

            <NavLink
              to="/browse"
              className={() => {
                const isActive = checkIsActive("/browse");
                return `text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium hover:scale-105 transform relative group ${
                  isActive ? "text-blue-600 font-bold scale-105" : ""
                }`;
              }}
            >
              Browse
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                  checkIsActive("/browse") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="space-x-4">
                <Link
                to={"/login"}
                  variant="outline"
                  className="rounded-lg p-2 text-gray-900 font-semibold hover:bg-red-800 bg-purple-400 transition-colors duration-200 hover:shadow-md"
                >
                  Login
                </Link>
                <Link
                to={"/signup"}
                className="rounded-lg p-2 bg-blue-600 hover:bg-red-800 bg-repeat-round text-white transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Sign up
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                    <Avatar className="h-10 w-10 ring-2 ring-blue-500 ring-offset-2 hover:ring-blue-600 transition-all duration-200">
                      <AvatarImage
                        src={user.avatar || "/zoro2.jpg"}
                        alt="Profile"
                      />
                    </Avatar>
                    <span className="font-medium text-gray-700">
                      {user.name || "Nikhil Sarak"}
                    </span>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-2">
                    <div className="p-3 border-b">
                      <p className="font-medium text-gray-900">Nikhil Sarak</p>
                      <p className="text-sm text-gray-500">
                        Nikhil is a good boy
                      </p>
                    </div>
                    <div className="space-y-1">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                      >
                        <User2 className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">View Profile</span>
                      </Link>
                      <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 text-red-600">
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Log out</span>
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
