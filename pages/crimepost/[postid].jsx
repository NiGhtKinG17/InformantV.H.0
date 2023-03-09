import CrimeMain from "@/components/CrimeMain";
import Header from "@/components/Header";
import Testimonies from "@/components/Testimonies";
import React from "react";

const Postpage = () => {
  return (
    <div className="bg-black text-white pb-3 scrollbar-none h-[145vh] overflow-hidden  px-10 space-y-5 flex flex-col ">
      <Header />
      <CrimeMain />
      <div className="inline-flex items-center justify-center w-full space-x-5">
        <hr className="w-[250px]" />
        <p className="text-xl italic">Testimonies</p>
        <hr className="w-[250px]" />
      </div>
      <Testimonies />
    </div>
  );
};

export default Postpage;
