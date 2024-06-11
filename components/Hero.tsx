"use client"
import React, { useEffect, useRef } from "react";
import HeroTitle from "./Hero/HeroTitle";
import HeroSubtitle from "./Hero/HeroSubtitle";
import HeroButton from "./Hero/HeroButton";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log(err));
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <video
        ref={videoRef}
        src="/gif/0e965785cf52d3a8844ed338dae79028-3.mp4"
        width={1000}
        height={1000}
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover bg-cover bg-no-repeat"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-screen">
        <div className="bg-gradient-to-t from-transparent to-black opacity-75 absolute inset-0" />
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        <HeroButton buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </section>
  );
};

export default Hero;
