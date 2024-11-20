/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate=useNavigate();
  const jobId="dwaejfnlwfjwke"; 
  return (
    <div className="p-10 mt-2 rounded-md shadow-xl bg-gray-150 border border-gray-350">
  <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500">2 days ago</p>
    <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-gray-100">
      <Bookmark />
    </Button>
  </div>
  
  <div className="flex items-center gap-2  my-3">
    <Button variant="outline" size="icon" className="border-none">
      <Avatar>
        <AvatarImage src="/com1.png" />
      </Avatar>
    </Button>
    <div>
      <h1 className="font-semibold text-lg text-gray-800">Company Name</h1>
      <p className="text-sm text-gray-500 font-semibold">India</p>
    </div>
  </div>
  
  <div className="mb-4">
    <h1 className="font-bold text-gray-700 text-lg">Title</h1>
    <p className="text-gray-600 text-sm font-semibold">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
      non soluta! Corporis, deleniti nemo.
    </p>
  </div>
  
  <div className="flex space-x-3 mt-4">
    <Badge
      className="bg-gray-100 text-blue-600 font-bold "
      key="position-badge"
    >
      12 Positions
    </Badge>
    <Badge
      className="bg-gray-100 text-teal-800 font-bold"
      key="part-time-badge"
    >
      Part Time
    </Badge>
    <Badge
      className="bg-gray-100 text-red-500 font-bold w-8  hover:bg-orange-200"
      key="lpa-badge"
    >
      LPA
    </Badge>
  </div>
  
  <div className="flex items-center gap-4 mt-4">
    <Button onClick={()=> navigate('/description/${jobId}')} className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-none">
      Details
    </Button>
    <Button className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white border-none">
      Save for later
    </Button>
  </div>
</div>

  );
};

export default Job;
