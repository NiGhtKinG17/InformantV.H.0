import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useWeb3Contract, useMoralis} from "react-moralis"
import { abi, contractAddresses } from "../constants"

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
  let postid = 1
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const contractAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

  
  const {runContractFunction: getAllPosts} = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getAllPosts",
    params:{}
  })


  useEffect(() => {
    if (isWeb3Enabled) {
        updateUi()
    }
}, [isWeb3Enabled])




async function updateUi(){
 const allPosts = (await getAllPosts()).toString()
 const postSep = allPosts.split("|")
  console.log(postSep)
}

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
      <div className=" rounded-lg backdrop-blur-sm bg-white/3 col-span-9  py-5 h-full">
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
        <div className="grid grid-cols-2 px-5 pt-3 mt-3 h-[550px] overflow-y-auto scrollbar rounded-lg">
          {postss.map((post) => {
            return (
              <Link href="/crimepost/1" key={post}>
                <div className="flex flex-nowrap space-x-3">
                  <div
                    className={`post-card h-[200px]  ${
                      post % 2 != 1 && `ml-4`
                    }`}
                  >
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center">
                        <div className="tag">Assault</div>
                        <CubeTransparentIcon className="h-6 text-gray-400 w-6 ml-auto" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <h3 className="text-lg ">
                          California bakery owner dead after armed robbery
                        </h3>
                        <p className="text-sm text-gray-500">
                          A beloved Northern California bakery owner has died
                          after being the victim of a robbery earlier this week
                          in which she was severely injured, her family said.
                          Jen Angel, the owner of Angel Cakes died after
                          losing...
                          {/* 268 Characters */}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center space-x-1 group">
                        <MapPinIcon className="h-5 w-5 text-gray-500 group-hover:text-white/80" />
                        <p className="text-xs text-gray-500 group-hover:text-white/80">
                          Mumbai, India
                        </p>
                      </div>
                      <div className="flex ml-auto items-center space-x-1 pr-2 group">
                        <CalendarDaysIcon className="h-5 w-5 text-gray-500 group-hover:text-white/80" />
                        <p className="text-xs text-gray-500 group-hover:text-white/80">
                          23/02/23
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* <div className="border border-white ml-2 mt-3">Second</div> */}
        </div>
      </div>
    </>
  );
};

export default CrimePosts;
