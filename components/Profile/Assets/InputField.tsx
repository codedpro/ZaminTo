"use client";
import React from "react";
import { IconType } from "react-icons";

interface InputFieldProps {
  icon: IconType;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ icon: Icon, label, type, name, value, onChange }) => {
  return (
    <div className="flex items-center ">
      <Icon className="text-orange-500 text-lg ml-2 mt-5" />
      <div className="flex flex-col w-full ">
        <label className="block text-gray-700 font-semibold mb-1">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>
  );
};

export default InputField;
