"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Special from "@/components/Special";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const heroVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const specialVariant = {
  hidden: { opacity: 0, y: -100 }, // Adjust starting position as needed
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Update state based on scroll position (adjust threshold)
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="light">
      <Header />
      <motion.div
        className="Hero"
        animate={isScrolled ? "visible" : "hidden"}
        variants={heroVariant}
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust animation timing and easing
      >
        <Hero
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </motion.div>
      <motion.div
        className="Special"
        animate={isScrolled ? "visible" : "hidden"}
        variants={specialVariant}
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust animation timing and easing
      >
        <Special
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </motion.div>
      <p>Search</p>
      <p>houses</p>
      <p>favorites</p>
      <p>about us</p>
      <p>blogs</p>
      <p>footer</p>
    </div>
  );
}
