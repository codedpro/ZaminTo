import React from "react";
import { FaTags, FaCheck } from "react-icons/fa";

interface Props {
  tags?: Record<string, boolean>;
  tagNames: Record<string, string>;
}

const HouseTags: React.FC<Props> = ({ tags = {}, tagNames }) => {
  const activeTags = Object.entries(tags)
    .filter(([_, value]) => value)
    .map(([key]) => tagNames[key]);

  return (
    <div
      dir="rtl"
      className=" p-4 rounded-lg flex items-center justify-center"
    >
      <div
        className="flex flex-wrap justify-center gap-4"
        style={{ width: "100%" }}
      >
        {activeTags.map((tagName, index) => (
          <div key={index} className="flex items-center px-4 py-2 rounded">
            {tagName} <FaCheck className="mr-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseTags;
