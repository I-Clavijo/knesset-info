// components/Hero.tsx
import React from "react";

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
      <div className="p-10 relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-20">
        <div className="text-center text-white ">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            עצבו את עתיד החקיקה
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl ">
            גלו הצעות חוק, שתפו את דעתכם והצביעו על חוקים שחשובים לכם
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Hero;
