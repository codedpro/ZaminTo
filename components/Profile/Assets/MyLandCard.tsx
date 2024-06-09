import React from "react";
import Link from "next/link";
import { House } from "@/types/House";
import { IoMdCash } from "react-icons/io";
import Image from "next/image";
import { AiFillAccountBook, AiFillGolden, AiFillPieChart } from "react-icons/ai";

interface MyLandCardProps {
  house: House;
  quantity: number;
}

const toPersianNumber = (number: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const isNegative = number < 0;
  const numberString = String(Math.abs(number));
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result = "," + result;
    }
    result =
      persianDigits[
        parseInt(numberString.charAt(numberString.length - 1 - i))
      ] + result;
  }

  if (isNegative) {
    result = "-" + result;
  }

  return result;
};

const MyLandCard: React.FC<MyLandCardProps> = ({ house, quantity }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden  transition duration-300 transform hover:scale-105">
      <Link href={`/House/${house.id}`} passHref className="cursor-pointer">
        <img
          src={house.imageURL}
          alt={house.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{house.name}</h3>
        <div className="flex items-center mb-2">
          <IoMdCash className="text-gray-600 text-lg" />
          <h4 className="text-gray-600  mr-1">قیمت:</h4>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-1">
              {toPersianNumber(house.price)}{" "}
            </p>
            <Image src="/icons/Toman.svg" alt="تومان" width={16} height={16} />
          </div>
        </div>
        <div className="flex items-center mb-2">
          <AiFillPieChart className="text-gray-600 text-lg" />
          <h4 className="text-gray-600 mr-1">سهم من:</h4>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-1">
              {toPersianNumber(quantity)}/{toPersianNumber(house.capacity)}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <AiFillGolden className="text-gray-600 text-lg" />
          <h4 className="text-gray-600 mr-1">ارزش کل سهام من:</h4>
          <div className="flex-1"></div>
          <div className="flex items-center">
            <p className="text-gray-700 mr-1">
              {toPersianNumber(quantity * house.price)}{" "}
            </p>
            <Image src="/icons/Toman.svg" alt="تومان" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLandCard;
