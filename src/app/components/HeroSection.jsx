import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Steven
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis facere distinctio nisi, cupiditate veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
