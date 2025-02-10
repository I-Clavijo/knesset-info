"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[calc(100vh-55px)] ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/knesset-background-video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="p-10 relative z-10 flex items-center  w-full h-full bg-black bg-opacity-20">
        <div className=" text-white mr-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl mb-5">
            גלו הצעות חוק שעומדות לעצב את עתידנו
          </h1>
          <TypeAnimation
            sequence={[
              "גלו הצעות חוק",
              2000,
              "שתפו את דעתכם",
              2000,
              "הצביעו והשפיעו",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              color: "light-grey",
              display: "inline-block",
            }}
            className="text-2xl md:text-3xl lg:text-4xl"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
