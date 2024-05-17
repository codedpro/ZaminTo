"use client"
import React from 'react';
import { motion } from 'framer-motion';
import HeroTitle from './Hero/HeroTitle';
import HeroSubtitle from './Hero/HeroSubtitle';
import HeroButton from './Hero/HeroButton';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="relative"
    >
      <Image
        src="/gif/giphy-downsized-large.gif"
        width={10}
        height={10}
        alt="Hero GIF"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div className="bg-gradient-to-t from-transparent to-black opacity-75 absolute inset-0" />
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        <HeroButton buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </motion.section>
  );
};

export default Hero;
