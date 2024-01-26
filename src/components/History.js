import React, { useState } from "react";
import Image from "next/image";
import carousel1 from "../../public/images/carousel1.jpg";
import carousel2 from "../../public/images/carousel2.jpg";
import carousel3 from "../../public/images/carousel3.jpg";
import carousel4 from "../../public/images/carousel4.jpg";

const History = () => {
  const [currentImage, setCurrentImage] = useState(carousel1);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="relative h-screen" id="history">
      <div className="absolute inset-0 w-screen flex flex-col items-center justify-center">
        <Image
          src={currentImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className=" absolute top-0 text-white mb-4 md:w-3/4 px-10">
          <div>
            <div className=" flex items-end">
              <p className=" font-bold text-8xl text-slate-500">01</p>
              <div className="flex flex-col">
                <p className="font-bold text-slate-600 transform scale-y-150">
                  HISTORY
                </p>
                <p className="w-6 h-6 bg-slate-500 mb-2"></p>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-xs ml-16 text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 w-full justify-center py-3 bg-gray-950 opacity-70">
          <Image
            src={carousel1}
            alt="Small Image 1"
            className=" cursor-pointer opacity-100"
            width={80}
            height={80}
            onClick={() => handleImageChange(carousel1)}
          />
          <Image
            src={carousel2}
            alt="Small Image 2"
            className=" cursor-pointer opacity-100"
            width={80}
            height={80}
            onClick={() => handleImageChange(carousel2)}
          />
          <Image
            src={carousel3}
            alt="Small Image 3"
            className=" cursor-pointer opacity-100"
            width={80}
            height={80}
            onClick={() => handleImageChange(carousel3)}
          />
          <Image
            src={carousel4}
            alt="Small Image 4"
            className=" cursor-pointer opacity-100"
            width={80}
            height={80}
            onClick={() => handleImageChange(carousel4)}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
