import React from "react";
import { users } from "@/constants/UserInfos";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaDollarSign,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Image from "next/image";
const toPersianNumber = (number: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const numberString = String(number);
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result = "،" + result;
    }
    result =
      persianDigits[
        parseInt(numberString.charAt(numberString.length - 1 - i))
      ] + result;
  }

  return result;
};
const ProfileInfo = () => {
  const user = users[0];

  return (
    <div className=" mt-10">
      <div className="flex flex-col items-center mb-8">
        <Image
          width={500}
          height={500}
          src={user.profileUrl}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          {user.firstName} {user.lastName}
        </h1>
        <p
          className={`text-lg ${
            user.isActive ? "text-green-500" : "text-red-500"
          } flex items-center mt-2`}
        >
          {user.isActive ? (
            <FaCheckCircle className="ml-2" />
          ) : (
            <FaTimesCircle className="ml-2" />
          )}
          {user.isActive ? "فعال" : "غیرفعال"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
          <FaDollarSign className="text-2xl text-green-500 ml-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">موجودی</h2>
            <div className="flex justify-between items-center">
              <span className="text-lg flex items-center">
                {toPersianNumber(user.cash)}
                <Image
                  src="/icons/Toman.svg"
                  alt="تومان"
                  width={24}
                  height={24}
                  className="mr-1"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
          <FaUser className="text-2xl text-blue-500 ml-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">نام کاربری</h2>
            <p className="text-lg text-gray-900">{user.userName}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
          <FaEnvelope className="text-2xl text-red-500 ml-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">ایمیل</h2>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
          <FaPhone className="text-2xl text-yellow-500 ml-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">شماره تلفن</h2>
            <p className="text-lg text-gray-900">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
