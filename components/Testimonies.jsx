import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, {useState, useEffect} from "react";
import TestimonyCard from "./TestimonyCard";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";

const Testimonies = ({postid}) => {

  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const contractAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

  
  const {runContractFunction: getPostTestimonies} = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getTestimoniesByPostId",
    params:{postid: postid}
  })

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUi();
    }
  }, [isWeb3Enabled]);

  async function updateUi(){
    const allPostTestimonies = (await getPostTestimonies()).toString()
    const testSep = allPostTestimonies.split("|")
  console.log(testSep)
  }

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
