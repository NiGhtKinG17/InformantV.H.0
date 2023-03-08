import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import TestimonyCard from "./TestimonyCard";

const Testimonies = () => {
  return (
    <div className="bg-white/3  px-5 py-5 space-x-5 flex overflow-x-auto scrollbar rounded-lg">
      <TestimonyCard />
      <TestimonyCard />
      <TestimonyCard />
      <TestimonyCard />
      <TestimonyCard />
    </div>
  );
};

export default Testimonies;
