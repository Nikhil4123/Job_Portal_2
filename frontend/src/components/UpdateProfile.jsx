/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Dialog, DialogHeader, DialogOverlay } from "./ui/dialog";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const UpdateProfile = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} className=" items-center">
      <DialogOverlay  />
      <DialogContent className="fixed inset-3 z-50  p-4 sm:max-w-[425px]" onInteractOutside={()=> setOpen(false)}>
        <div className="bg-gray-200 rounded-lg shadow-lg p-8 max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center mb-4">
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form action="">
            <div className="grid gap-4">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number
                </Label>
                <Input
                  id="number"
                  name="number"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </Label>
                <Input
                  id="bio"
                  type="text"
                  name="bio"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills
                </Label>
                <Input
                  id="skills"
                  type="text"
                  name="skills"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  file
                </Label>
                <Input
                  id="file"
                  type="file"
                  name="file"
                  accept="application/pdf"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setOpen(false)} // This will close the modal
                className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit" // This button submits the form
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
