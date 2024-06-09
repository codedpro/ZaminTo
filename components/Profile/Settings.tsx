"use client";
import React, { useState } from "react";
import { users } from "@/constants/UserInfos";
import {
  FaSave,
  FaUser,
  FaLock,
  FaPhone,
  FaEnvelope,
  FaTrash,
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";
import InputField from "./Assets/InputField";

interface SettingsProps {
  userId: string;
}

const Settings: React.FC<SettingsProps> = ({ userId }) => {
  const user = users.find((user) => user.id === userId);
  if (user === undefined || user.id === undefined) {
    return <p>کاربر یافت نشد</p>;
  }
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    userName: user?.userName || "",
    password: "",
    confirmPassword: "",
    profileUrl: user?.profileUrl || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleDeleteProfilePicture = () => {
    setSelectedImage(null);
    setFormData((prevState) => ({
      ...prevState,
      profileUrl: "/profile.png",
    }));
  };

  return (
    <div dir="rtl" className="mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        تنظیمات
      </h1>
      <div className="flex flex-col items-center mb-8 relative">
        <div className="relative">
          <label htmlFor="profilePictureInput" className="cursor-pointer">
            <Image
              width={128}
              height={128}
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : formData.profileUrl
              }
              alt={`${formData.firstName} ${formData.lastName}`}
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </label>
          <input
            id="profilePictureInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
          <FaTrash
            className="absolute top-6 right-6 text-red-500 cursor-pointer"
            style={{ transform: "translate(25%, -25%)" }}
            onClick={handleDeleteProfilePicture}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          icon={FaUser}
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          icon={FaUser}
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          icon={FaEnvelope}
          label="Username"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <InputField
          icon={FaPhone}
          label="Phone Number"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          icon={FaLock}
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          icon={FaLock}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            onClick={handleSave}
            className="flex items-center justify-center w-32  p-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-300"
          >
            ذخیره
            <FaSave className="mr-2 " />
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-row">
            <FaCheck className="mr-2 text-lg" />
            <p className="text-lg font-semibold">ذخیره شد </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
