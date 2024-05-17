"use client"
import React from 'react';
import HeroTitle from './Hero/HeroTitle';
import HeroSubtitle from './Hero/HeroSubtitle';
import HeroButton from './Hero/HeroButton';
import Image from 'next/image';
import useParallax from './parallax'; // Import the custom hook

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  const { scrollY } = useParallax();

  return (
    <section className="relative overflow-hidden">
      {/* Parallax Image */}
      <Image
        src="/gif/giphy-downsized-large.gif"
        width={10}
        height={10}
        alt="Hero GIF"
        className="fixed top-0 left-0 w-full h-full object-cover bg-cover bg-no-repeat z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div className="bg-gradient-to-t from-transparent to-black opacity-75 absolute inset-0" />
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        <HeroButton buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </section>
  );
};

export default Hero;
