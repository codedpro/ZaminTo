import Image from "next/image";
import { FiPieChart } from "react-icons/fi";

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

interface House {
  imageURL: string;
  price: number;
  discount?: number;
  name: string;
  capacity: number;
  sold: number;
  tagNames: { [key: string]: string };
  tags: { [key: string]: boolean } | undefined;
}

const HouseCard: React.FC<House> = ({
  imageURL,
  price,
  discount,
  name,
  capacity,
  sold,
  tagNames,
  tags,
}) => {
  const formattedPrice = toPersianNumber(price);
  const formattedSold = toPersianNumber(sold);
  const formattedCapacity = toPersianNumber(capacity);

  return (
    <div
      className="bg-white text-gray-800 rounded-lg shadow-md p-4 mb-4 relative"
      dir="rtl"
    >
      <div className="w-72 h-56 relative">
        <Image
          src={imageURL}
          alt={name}
          width={500}
          height={500}
          className="w-72 h-56 rounded-lg"
        />

        <div className="absolute top-1 right-1 flex flex-col gap-1">
          {discount && (
            <div
              dir="rtl"
              className="bg-orange-500 text-center text-sm text-white rounded-full px-3 py-1"
            >
              {discount}% تخفیف
            </div>
          )}
          {tags &&
            Object.entries(tags).map(([tag, value]) => {
              if (!value) return null;
              return (
                <div
                  key={tag}
                  className="bg-green-500 text-center text-white text-sm rounded-full px-3 py-1"
                >
                  {tagNames[tag]}
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg flex items-center">
            {formattedPrice}{" "}
            <Image src="/icons/Toman.svg" alt="تومان" width={16} height={16} />
          </span>
          <span className="flex items-center">
            {`${formattedSold}/${formattedCapacity}`}{" "}
            <FiPieChart className="mr-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
