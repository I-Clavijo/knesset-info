"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[calc(100vh-55px)]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/knesset-background-video.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-30 before:content-[''] before:absolute before:inset-0 before:box-border before:shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]">
        <div className="text-white p-4 md:p-8 relative">

          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6 text-shadow-lg">
            גלו הצעות חוק שעומדות לעצב את עתידנו
          </h1>

          {/* Animated text */}
          <TypeAnimation
            sequence={[
              "הצעות חוק לפי נושאים",
              2000,
              "הצעות חוק בצורה נגישה וברורה",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="block text-2xl md:text-3xl lg:text-4xl text-light-gray"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
