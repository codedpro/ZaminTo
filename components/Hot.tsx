"use client";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HouseCard from "./Cards/HouseCard";
import { houses } from "@/constants/hot";

const Hot: React.FC = () => {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const [isScrollable, setIsScrollable] = React.useState<boolean>(false);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      setIsScrollable(
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth
      );
    }
  }, []);

  const handleScroll = (scrollType: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollType === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(scrollRef.current.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="p-4">
      <style>
        {`
        .scroll-container::-webkit-scrollbar {
            display: none;
          }

        .scroll-container {
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Hot Houses</h2>
        <div className="flex items-center">
          <button
            className={`mr-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 ${
              scrollPosition <= 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleScroll("left")}
            disabled={scrollPosition <= 0}
          >
            <FiChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 ${
              !isScrollable ||
              (!!scrollRef.current &&
                scrollPosition >=
                  scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => handleScroll("right")}
            disabled={
              !isScrollable ||
              (!!scrollRef.current &&
                scrollPosition >=
                  scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
            }
          >
            <FiChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-4 scroll-container"
      >
        {houses.map((house, index) => (
          <HouseCard key={index} {...house} />
        ))}
      </div>
    </div>
  );
};

export default Hot;
