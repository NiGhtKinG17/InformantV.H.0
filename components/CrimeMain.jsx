import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "../public/money.jpg";
import image2 from "../public/domestic.jpg";

const CrimeMain = () => {
  const crimetypes = [
    "Assault",
    "Extortion",
    "Hijaking",
    "Kidnaping",
    "Rape",
    "Robbery",
    "Theft",
  ];

  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="bg-white/3 flex flex-col rounded-lg px-5 pt-4 pb-5">
      <div className="flex items-center ">
        <div className="flex  items-center space-x-5 ">
          <div className="flex items-center space-x-1">
            <CalendarDaysIcon className="h-5 w-5 " />
            <p className="text-md ">23/02/23</p>
          </div>
          <div className="flex items-center space-x-1">
            <MapPinIcon className="h-5 w-5 " />
            <p className="text-md ">Mumbai, India</p>
          </div>
        </div>
        <div className="ml-auto  flex items-center space-x-2 text-black">
          <CubeTransparentIcon className="h-7 w-7 text-gray-500 " />
        </div>
      </div>
      <div className="mt-3" id="Title">
        <h1 className="text-4xl">
          California bakery owner dead after armed robbery
        </h1>
      </div>
      <div className="mt-2" id="Description">
        <p className="text-white/80">
          A beloved Northern California bakery owner has died after being the
          victim of a robbery earlier this week in which she was severely
          injured, her family said. Jen Angel, the owner of Angel Cakes died
          after losing all brain function, her loved ones said Thursday evening.
        </p>
      </div>
      <div className="flex items-center overflow-x-auto  scrollbar-none mt-3 space-x-4 ">
        {crimetypes.map((crime, i) => {
          return (
            <div className={`crimes-main flex `} key={crime}>
              {crime}
            </div>
          );
        })}
      </div>
      <div className="mt-5 bg-[#141515]/40 w-full h-96 rounded-lg relative py-3 group ">
        <div
          className="w-full h-full rounded-2xl duration-500"
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0  left-5 text-2xl rounded-full p-2 bg-white/5 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0   right-5 text-2xl rounded-full p-2 bg-white/5 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default CrimeMain;
