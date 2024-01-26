import React from "react";
import Image from "next/image";
import heroimage from "../../public/images/hero.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 w-screen">
        <Image
          src={heroimage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Navbar absolute={true} />
      </div>
    </div>
  );
};

export default Hero;
