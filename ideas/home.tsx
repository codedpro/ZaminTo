"use client"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Special from "@/components/Special";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const deltaY = event.deltaY;

      if (deltaY > 0 && isHeroVisible) {
        // Scroll down
        setIsHeroVisible(false);
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      } else if (deltaY < 0 && !isHeroVisible) {
        // Scroll up
        setIsHeroVisible(true);
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      startY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      const deltaY = startY.current - event.touches[0].clientY;

      if (deltaY > 0 && isHeroVisible) {
        // Scroll down
        setIsHeroVisible(false);
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      } else if (deltaY < 0 && !isHeroVisible) {
        // Scroll up
        setIsHeroVisible(true);
        if (containerRef.current) {
          containerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    if (containerRef.current) {
      containerRef.current.addEventListener("touchstart", handleTouchStart, { passive: true });
      containerRef.current.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (containerRef.current) {
        containerRef.current.removeEventListener("touchstart", handleTouchStart);
        containerRef.current.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [isHeroVisible]);

  return (
    <div ref={containerRef} className="light" style={{ height: "100vh", overflow: "hidden" }}>
      <Header />
      <div className="Hero">
        <Hero
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </div>
      <div className="Special">
        <Special
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </div>
      <div>
        <p>Search</p>
        <p>houses</p>
        <p>favorites</p>
        <p>about us</p>
        <p>blogs</p>
        <p>footer</p>
      </div>
    </div>
  );
}