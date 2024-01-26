import React from "react";
import logo from "../../public/images/logo.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex justify-evenly items-center py-2">
      <div className="absolute inset-0 bg-slate-700"></div>

      <div className="relative z-10 flex space-x-1 items-center">
        <Image
          src={logo}
          alt="Logo"
          className="rounded-full"
          width={50}
          height={50}
        />

        <div className="flex flex-col">
          <p className="font-bold transform scale-y-150 text-white">
            LOSANGELES
          </p>
          <p className="font-bold transform scale-y-150 text-blue-900">
            MOUNTAINS
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-xs text-white">
          COPYRIGHT 2016. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
