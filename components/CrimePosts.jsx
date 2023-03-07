import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import PostModal from "./PostModal";

const CrimePosts = () => {
  const crimetypes = [
    "Assault",
    "Bribery",
    "Extortion",
    "Fraud",
    "Hijaking",
    "Kidnaping",
    "Prostitution",
    "Rape",
    "Robbery",
    "Terrorism",
    "Theft",
  ];

  const postss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [firstTime, setFirstTime] = useState(true);
  const [keepSelected, setKeepSelected] = useState(0);
  const [showCrimeModal, setShowCrimeModal] = useState(false);

  useEffect(() => {
    const hacker = (id, i) => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iterations = 0;
      const eleName = document.getElementById(id);
      const interval = setInterval(() => {
        eleName.innerText = eleName.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return eleName.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= eleName.dataset.value.length) {
          console.log(document.getElementById(id).innerText);
          clearInterval(interval);
        }

        iterations += 1 / 3;
      }, 30 + i * 2);
    };

    for (var i = 0; i < crimetypes.length; i++) {
      hacker(crimetypes[i], i);
    }
  }, []);

  return (
    <>
      <div className=" rounded-lg backdrop-blur-sm bg-white/5 col-span-9  py-5 h-full">
        {/* // Crime type Selection */}
        <div className="flex items-center  overflow-x-auto px-5 scrollbar-none space-x-4 ">
          {crimetypes.map((crime, i) => {
            return (
              <button
                className={`crimes flex ${
                  firstTime && i === 0 && `text-yellow-green bg-white/10`
                } ${i === keepSelected && `text-yellow-green bg-white/10`}`}
                key={crime}
                onClick={() => {
                  setFirstTime(false);
                  setKeepSelected(i);
                }}
                data-value={crime}
                id={crime}
              >
                {crime}
              </button>
            );
          })}
        </div>

        {/* Crime Posts */}
        <div className="grid grid-cols-2 px-5  mt-5 h-[550px] overflow-y-auto scrollbar rounded-lg">
          {postss.map((post) => {
            return (
              <div
                className={`post-card ${post % 2 != 1 && `ml-3`}`}
                key={post}
                onClick={() => setShowCrimeModal(true)}
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-center">
                    <div className="tag">Assault</div>
                    <CubeTransparentIcon className="h-6 w-6 ml-auto" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-xl font-bold">
                      Husband assaults his wife
                    </h3>
                    <p className="text-xs text-gray-500">
                      In the city life of delhi, the stress life affecting...
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <MapPinIcon className="h-5 w-5 text-yellow-green" />
                    <p className="text-xs">Mumbai, India</p>
                  </div>
                  <div className="flex ml-auto items-center space-x-1 pr-2">
                    <CalendarDaysIcon className="h-5 w-5 text-yellow-green" />
                    <p className="text-xs">23/02/23</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="border border-white ml-2 mt-3">Second</div> */}
        </div>
      </div>
      <PostModal
        invisible={showCrimeModal}
        onClose={() => setShowCrimeModal(false)}
      />
    </>
  );
};

export default CrimePosts;
