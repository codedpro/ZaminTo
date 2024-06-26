import Image from "next/image";
import Link from "next/link";
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
  id: string;
  imageURL: string;
  price: number;
  name: string;
  capacity: number;
  sold: number;
  tagNames: { [key: string]: string };
  tags: { [key: string]: boolean } | undefined;
}

const HouseCard: React.FC<House> = ({
  imageURL,
  price,

  name,
  capacity,
  sold,
  tagNames,
  tags,
  id,
}) => {
  const formattedPrice = toPersianNumber(price);
  const formattedSold = toPersianNumber(sold);
  const formattedCapacity = toPersianNumber(capacity);

  return (
    <Link
      href={`/House/${id}`}
      className="bg-white text-gray-800 rounded-lg shadow-md p-4 mb-4 relative"
      dir="rtl"
    >
      <div className="w-full h-auto md:h-56 relative">
        <Image
          src={imageURL}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-1 right-1 flex flex-col gap-1">
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
    </Link>
  );
};

export default HouseCard;
