import React from "react";

const HouseHero: React.FC = ({}) => {
  return (
    <section className="relative overflow-hidden">
      <video
        src="/gif/0e965785cf52d3a8844ed338dae79028-3.mp4"
        width={1000}
        height={1000}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover bg-cover bg-no-repeat"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-screen">
        <div className="bg-gradient-to-t from-transparent to-black opacity-75 absolute inset-0" />
        <h1>hello world</h1>
      </div>
    </section>
  );
};

export default HouseHero;
