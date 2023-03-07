import {
  ArchiveBoxXMarkIcon,
  ArrowPathRoundedSquareIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostModal = ({ invisible, onClose }) => {
  if (!invisible) return null;
  return (
    <div
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded-md"
      id="wrapper"
      onClick={(e) => {
        if (e.target.id === "wrapper") onClose();
      }}
    >
      <div className="flex flex-col   rounded-md w-[700px] h-[600px] shadow-lg ">
        {/* header-section  */}
        <div className="flex items-center   py-3 text-white">
          <div
            className="hover:rounded-full ml-auto hover:bg-dark-green group p-1"
            onClick={() => onClose()}
          >
            <XMarkIcon className="h-7 w-7 group-hover:text-yellow-green" />
          </div>
        </div>

        <div className="w-full flex rounded-md flex-1 bg-form-gray/95 ">
          <div className="bg-black relative flex-1 w-[50%]">
            <Image
              src="/domestic.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </div>
          <div className=" w-[50%] flex flex-col">
            <div className="px-3 py-3 flex flex-col flex-1">
              {/* Header */}
              <div className="">
                <h1 className="text-2xl">
                  Teacher assaults his students by beating the shit out of him
                </h1>
              </div>
              {/* Location and Date and Time */}
              <div className="flex items-center mt-2">
                <div className="flex items-center bg-dark-green px-2 py-1 rounded-lg space-x-1">
                  <MapPinIcon className="h-4 w-4 text-yellow-green" />
                  <p className="text-sm text-yellow-green">Mumbai, India</p>
                </div>
                <div className="flex ml-auto items-center space-x-1 bg-dark-green px-2 py-1 rounded-lg">
                  <CalendarDaysIcon className="h-4 w-4 text-yellow-green" />
                  <p className="text-sm text-yellow-green">23/02/23</p>
                </div>
              </div>
              {/* Show testimonies / Upload Testimonies */}
              <div className="mt-3">
                <Link href="">
                  <button className="bg-yellow-green text-black px-2 w-full rounded-md py-1.5 flex items-center justify-center space-x-2">
                    <p>Show Testimonies</p>
                    <ArrowPathRoundedSquareIcon className="h-5 w-5" />
                  </button>
                </Link>
              </div>

              {/* Description */}
              <p className="bg-input-black w-full h-[230px] mt-3 scrollbar-thin scrollbar-thumb-gray-500/50 scrollbar-track-input-black scrollbar-thumb-rounded-full scrollbar-track-rounded-full rounded-lg px-2 py-2">
                vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
              </p>
              {/* Tags */}
              <div className="flex items-center  overflow-x-auto mt-2 scrollbar-none space-x-4 rounded-lg ">
                <button className="crimes flex text-yellow-green bg-dark-green text-xs">
                  Assault
                </button>
                <button className="crimes flex text-yellow-green bg-dark-green text-xs">
                  Bribery
                </button>
                <button className="crimes flex text-yellow-green bg-dark-green text-xs">
                  Child
                </button>
                <button className="crimes flex text-yellow-green bg-dark-green text-xs">
                  Zombies
                </button>
                <button className="crimes flex text-yellow-green bg-dark-green text-xs">
                  Extortion
                </button>
              </div>
            </div>
            {/* Completion */}
            <div className="flex items-center px-3 pb-3 space-x-1 text-yellow-green">
              <CheckCircleIcon className="h-5 w-5" />
              <p>Investigated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
