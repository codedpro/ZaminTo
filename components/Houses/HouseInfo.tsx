import React from "react";
import {
  FaMoneyBillAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBuilding,
  FaCity,
  FaAddressCard,
} from "react-icons/fa";
import { House } from "@/types/House";
import Image from "next/image";

interface Props {
  house: House;
}
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
const HouseInfo: React.FC<Props> = ({ house }) => {
  const formattedPrice = toPersianNumber(house.price);
  const formattedSold = toPersianNumber(house.sold);
  const formattedCapacity = toPersianNumber(house.capacity);

  return (
    <section
      dir="rtl"
      className="p-6 rounded-lg border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
    >
      <div className="flex items-center">
        <FaMoneyBillAlt className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">قیمت</span>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center">
              {formattedPrice}{" "}
              <Image
                src="/icons/Toman.svg"
                alt="تومان"
                width={16}
                height={16}
              />
            </span>
          </div>{" "}
        </div>
      </div>

      <div className="flex items-center">
        <FaUsers className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">ظرفیت</span>
          <p className="text-sm">
            <span className="flex items-center">
              {`${formattedSold}/${formattedCapacity}`}{" "}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <FaRulerCombined className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">متراژ</span>
          <p className="text-sm">{house.metrage} متر</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaBuilding className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">بهر</span>
          <p className="text-sm">{house.bar} متر</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaCity className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">کاربری</span>
          <p className="text-sm">{house.karbari}</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaMapMarkerAlt className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">استان</span>
          <p className="text-sm">{house.provience}</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaCity className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">شهر</span>
          <p className="text-sm">{house.city}</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaAddressCard className="text-black text-2xl ml-2" />
        <div>
          <span className="text-lg font-semibold text-black">ادرس</span>
          <p className="text-sm">{house.address}</p>
        </div>
      </div>
    </section>
  );
};

export default HouseInfo;
