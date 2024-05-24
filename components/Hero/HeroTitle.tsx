"use client"
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import ReactDOM from "react-dom";

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  const [isBuy, setIsBuy] = useState(true);
  const [currentText, setCurrentText] = useState("بخر");
  const [currentColor, setCurrentColor] = useState("#48bb78");
  const [currentIcon, setCurrentIcon] = useState(
    <FaArrowUp className="ml-2 inline" />
  );

  useEffect(() => {
    const flipWords = [
      {
        text: "بخر",
        icon: <FaArrowUp className="ml-2 inline" />,
        color: "#48bb78",
      },
      {
        text: "بفروش",
        icon: <FaArrowDown className="ml-2 inline" />,
        color: "#f56565",
      },
    ];
    let currentIndex = 0;

    const flipInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % flipWords.length;
      const { text, icon, color } = flipWords[currentIndex];

      gsap.to(".flip-text", {
        duration: 0.5,
        rotationX: -90,
        opacity: 0,
        onComplete: () => {
          setIsBuy(currentIndex === 0);
          setCurrentText(text);
          setCurrentIcon(icon);
          setCurrentColor(color);
          gsap.set(".flip-text", { rotationX: 90 });
          gsap.to(".flip-text", {
            duration: 0.5,
            rotationX: 0,
            opacity: 1,
          });
        },
      });
    }, 3000);

    return () => clearInterval(flipInterval);
  }, []);
  return (
    <div dir="rtl" className="flex items-center hero-title">
      <style jsx>{`
        .hero-title h1 {
          z-index: 20;
        }

        .flip-text {
          margin-left: 1rem;
          font-size: 4rem;
          font-weight: bold;
          perspective: 1000px;
          display: inline-flex;
          align-items: center;
          color: ${currentColor}; /* Use state to control color */
        }

        .inline {
          display: inline;
        }
      `}</style>

      <h1 className="text-6xl font-bold text-white m-2">{title}</h1>
      <div className="flip-text">
        <div style={{ transformStyle: "preserve-3d" }}>
          {currentText}
          {currentIcon}
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
