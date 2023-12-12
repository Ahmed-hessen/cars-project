"use client";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find , book , rent a car __ quickly and super easily{" "}
        </h1>
        <p className="hero__subtitle">
          {" "}
          streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue mt-10 text-white rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay overflow-hidden " />
      </div>
    </div>
  );
};

export default Hero;