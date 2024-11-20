/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2, User, Mail, Phone, FileText, Code, FileBadge } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.profile?.resume || ""
    });
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white dark:bg-gray-800">
                <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Update Profile</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={submitHandler} className="px-6 py-4 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Full Name
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="name"
                                    name="fullname"
                                    type="text"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Phone Number
                            </Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Bio
                            </Label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="bio"
                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                    placeholder="Tell us about yourself"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Skills
                            </Label>
                            <div className="relative">
                                <Code className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="skills"
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                    placeholder="Enter your skills (comma separated)"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="file" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Resume
                            </Label>
                            <div className="relative">
                                <FileBadge className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                                <Input
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandler}
                                    className="pl-10 h-10 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700"
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <Button 
                            type="button" 
                            className="mr-2 w-full h-10 font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500 transition-colors"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            className="w-full h-10 font-extrabold text-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                                    Please wait
                                </>
                            ) : (
                                'Update Profile'
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateProfileDialog;
