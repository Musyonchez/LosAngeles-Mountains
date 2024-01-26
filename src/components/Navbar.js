import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import Link from "next/link";

const Navbar = ({ absolute, text }) => {
  const navbarStyle = absolute
    ? { color: "white", position: "absolute", top: 0, left: 0, right: 0 }
    : {};
  const [displayText, setDisplayText] = useState(text);

  return (
    <div
      className="flex justify-around items-center w-full py-3"
      style={navbarStyle}
    >
      <div className="flex space-x-1">
        <Image
          src={logo}
          alt="Logo"
          className="rounded-full"
          width={50}
          height={50}
        />

        {displayText && (
          <div className="flex flex-col">
            <p className="font-bold transform scale-y-150">LOSANGELES</p>
            <p className="font-bold transform scale-y-150 text-blue-900">
              MOUNTAINS
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-5">
        <Link href="#history" spy={true} smooth={true} duration={500}>
          <p className="underline italic">01.HISTORY</p>
        </Link>
        <Link href="#team" spy={true} smooth={true} duration={500}>
          <p className="underline italic">02.TEAM</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
