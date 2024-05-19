import React from "react";
import Image from "next/image";

interface SearchBGProps {
  imageUrl: string;
}

const SearchBG: React.FC<SearchBGProps> = ({ imageUrl }) => {
  return (
    <div className="justify-center flex items-center">
      <Image
        src={imageUrl}
        alt="Search Background"
        width={5000}
        height={500}
        className="rounded-lg reletive w-1/2 h-5"
      />
    </div>
  );
};

export default SearchBG;
