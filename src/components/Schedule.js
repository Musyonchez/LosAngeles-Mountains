import React, { useState } from "react";
import Image from "next/image";
import schedule from "../../public/images/schedule.jpg";
import schedule2 from "../../public/images/schedule2.jpg";

const Schedule = () => {
  const [currentImage, setCurrentImage] = useState(schedule);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  const buttonClass = (image, bgColor) =>
    `cursor-pointer transform scale-y-125 text-slate-300 px-3 py-2 font-bold${
      image === currentImage ? ` ${bgColor} underline` : ""
    }`;

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 w-screen flex flex-col items-center justify-center">
        <Image
          src={currentImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className="absolute top-0 flex space-x-2 w-full justify-center bg-slate-700">
          <button
            className={buttonClass(schedule, "bg-slate-500")}
            onClick={() => handleImageChange(schedule)}
          >
            MOUNTAIN 1
          </button>
          <button
            className={buttonClass(schedule2, "bg-slate-500")}
            onClick={() => handleImageChange(schedule2)}
          >
            MOUNTAIN 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
