import React from "react";
import {
  FiDollarSign,
  FiArrowUp,
  FiArrowDown,
  FiCreditCard,
} from "react-icons/fi";
import Image from "next/image";

interface Land {
  landID: string;
  qty: number;
}

interface House {
  id: string;
  name: string;
  imageURL: string;
  price: number;
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

const AssetSummary: React.FC<{
  cash: number;
  lands: Land[];
  houses: House[];
  totalDeposit: number;
  totalProfit: number;
  totalWithdrawal: number;
}> = ({ cash, lands, houses, totalDeposit, totalProfit, totalWithdrawal }) => {
  const totalHousesValue = houses.reduce(
    (total, house) =>
      total +
      (lands.find((land) => land.landID === house.id)?.qty || 0) * house.price,
    0
  );

  const totalAssets = cash + totalHousesValue;

  return (
    <div className="text-right">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FiDollarSign className="w-6 h-6 ml-2 text-orange-500" />
          <div className="text-lg text-gray-800 font-semibold">
            مجموع دارایی
          </div>
        </div>
        <div className="text-lg font-semibold flex items-center mr-8">
          {toPersianNumber(totalAssets)}{" "}
          <Image
            src="/icons/Toman.svg"
            alt="تومان"
            width={16}
            height={16}
            className="mr-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FiCreditCard className="w-6 h-6 ml-2 text-orange-500" />
          <div className="text-lg text-gray-800 font-semibold">
            مجموع واریزی
          </div>
        </div>
        <div className="text-lg font-semibold flex items-center mr-8">
          {toPersianNumber(totalDeposit)}{" "}
          <Image
            src="/icons/Toman.svg"
            alt="تومان"
            width={16}
            height={16}
            className="mr-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FiArrowUp className="w-6 h-6 ml-2 text-green-500" />
          <div className="text-lg text-gray-800 font-semibold">مجموع سود</div>
        </div>
        <div className="text-lg font-semibold flex items-center mr-8">
          {toPersianNumber(totalProfit)}{" "}
          <Image
            src="/icons/Toman.svg"
            alt="تومان"
            width={16}
            height={16}
            className="mr-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FiArrowDown className="w-6 h-6 ml-2 text-red-500" />
          <div className="text-lg text-gray-800 font-semibold">
            مجموع برداشت
          </div>
        </div>
        <div className="text-lg font-semibold flex items-center mr-8">
          {toPersianNumber(totalWithdrawal)}{" "}
          <Image
            src="/icons/Toman.svg"
            alt="تومان"
            width={16}
            height={16}
            className="mr-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FiCreditCard className="w-6 h-6 ml-2 text-orange-500" />
          <div className="text-lg text-gray-800 font-semibold">مجموع سهام</div>
        </div>
        <div className="text-lg font-semibold ml-7">
          {toPersianNumber(houses.length)}
        </div>
      </div>
    </div>
  );
};

export default AssetSummary;
