"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HouseCard from "./Cards/HouseCard";

interface ScrollableSectionProps {
  title: string;
  houses: Array<any>;
  scrollAmount?: number;
  scrollInterval?: number;
  showArrows?: boolean;
  customClass?: string;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({
  title,
  houses,
  scrollAmount = 200,
  scrollInterval = 3000,
  showArrows = true,
  customClass = ""
}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("right");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      setIsScrollable(
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth
      );
    }
  }, [mounted, houses]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll(scrollDirection);
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [scrollInterval, scrollPosition, scrollDirection]);

  const handleScroll = (scrollType: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmountValue = scrollType === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: scrollAmountValue, behavior: "smooth" });

      const newScrollPosition = scrollRef.current.scrollLeft + scrollAmountValue;
      setScrollPosition(newScrollPosition);

      if (newScrollPosition <= 0) {
        setScrollDirection("right");
      } else if (newScrollPosition >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
        setScrollDirection("left");
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={`p-4 ${customClass}`}>
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
      <div dir="rtl" className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {showArrows && (
          <div className="flex items-center">
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
            <button
              className={`mr-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 ${
                scrollPosition <= 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleScroll("left")}
              disabled={scrollPosition <= 0}
            >
              <FiChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
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

export default ScrollableSection;
