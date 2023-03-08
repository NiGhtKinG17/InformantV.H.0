import {
  CheckCircleIcon,
  CubeTransparentIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import TModal from "./TModal";

const TestimonyCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-nowrap" onClick={() => setShowModal(true)}>
        <div className="bg-[#141515]/70 rounded-lg  flex flex-col px-4 pt-5 pb-3 w-[400px] h-[250px] text-white cursor-pointer hover:shadow-md hover:scale-105 hover:shadow-yellow-green hover:-translate-y-1 hover:transition-all hover:ease-out">
          <div className="flex  items-center  text-white/70">
            <div className="flex items-center space-x-1">
              <div className="">
                <UserCircleIcon className="h-6 w-6" />
              </div>
              <div className="text-sm ">
                <p>r/0x42..314</p>
              </div>
            </div>

            <div className="ml-auto">
              <CubeTransparentIcon className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          <div className="flex items-start mt-3">
            <div className="text-lg  ">
              <h1 className="leading-tight">
                California bakery owner dead after armed robbery
              </h1>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex-1 mt-1">
            <p>
              A beloved Northern California bakery owner has died after being
              the victim of a robbery earlier this week in which she was...
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-700 mt-3">
              <p>23/02/2023</p>
            </div>
            <div className="ml-auto">
              <CheckCircleIcon className="h-7 w-7 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <TModal invisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default TestimonyCard;
