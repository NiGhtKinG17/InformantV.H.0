import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  UserIcon,
  CubeTransparentIcon,
  PuzzlePieceIcon,
  PlusIcon,
  PowerIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import FormModal from "./FormModal";
import { ConnectButton } from "web3uikit";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("company").onmousemove = (event) => {
      let iterations = 0;
      const companyname = "INFORMANT";

      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length) {
          // console.log(document.getElementById("company").innerHTML);
          clearInterval(interval);
        }

        iterations += 1 / 3;
      }, 30);
    };
  }, []);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const eleName = document.getElementById("company");
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
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  }, []);
  return (
    <>
      <header className="pt-5 flex ">
        {/* Company Logo */}
        <div className="flex items-center space-x-3">
          {/* <div className="border border-white rounded-full p-1.5">
          <div className="relative h-8 w-8 flex-shrink-0 cursor-pointer  ">
            <Link href="/">
              <Image
                src="/ilogotwo.jpg"
                fill
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </Link>
          </div>
        </div> */}
          <CubeTransparentIcon className="h-12 w-12 transition-all hover:rotate-180 hover:scale-110 ease-out" />
          <h1
            data-value="INFORMANT"
            id="company"
            className="text-4xl tracking-[6px] company-name"
          >
            INFORMANT
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex ml-auto space-x-5">
          <div
            className="bg-gray-500/20 flex items-center px-2 py-2 rounded-full hover:shadow-md hover:shadow-yellow-green/50 group"
            onClick={() => setShowModal(true)}
          >
            <PlusIcon className="h-8 w-8 bg-transparent group-hover:rotate-180 group-hover:text-yellow-green text-white/50 transition-all ease-out" />
          </div>
          <div className="flex items-center custom-connect space-x-2 rounded-full group">
            {/* <PowerIcon className="h-8 w-8 bg-transparent group-hover:text-yellow-green group-hover:-translate-y-1 transition-all ease-out" /> */}
            <ConnectButton moralisAuth={false} theme="secondary" />
          </div>
        </div>
      </header>
      <FormModal invisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
