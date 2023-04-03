import {
  ArrowPathRoundedSquareIcon,
  GlobeAltIcon,
  PhotoIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useNotification } from "web3uikit";
import { abi, contractAddresses } from "../constants";

const FormModal = ({ invisible, onClose }) => {
  if (!invisible) return null;

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

  const date = new Date();
  const [startDate, setStartDate] = useState(date);
  const [title, setTitle] = useState("");
  const [crimeType, setCrimeType] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [owner, setOwner] = useState("");
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const contractAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  const {
    runContractFunction: addPost,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addPost",
    params: {
      _title: title,
      _crimeType: crimeType,
      _description: desc,
      _timeStamp: startDate.toString(),
      _location: location,
    },
  });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleCrimeType = (event) => {
    setCrimeType(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const dispatch = useNotification();
  const handleSuccess = async function (tx) {
    await tx.wait(1);
    handleNewNotification(tx);
    window.location.reload(false);
  };
  const handleNewNotification = function () {
    dispatch({
      type: "info",
      message: "Transaction Complete",
      title: "Tx Notification",
      position: "topR",
      icon: "🔔",
    });
  };

  const handleClick = () => {
    try {
      async function func() {
        await addPost({
          onSuccess: handleSuccess,
          onError: (e) => console.log(e),
        });
      }
      func();
    } catch (e) {
      windows.alert(e);
    }
  };

  async function updateUi() {}

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUi();
    }
  }, [isWeb3Enabled]);

  return (
    <div
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded-md"
      id="wrapper"
      onClick={(e) => {
        if (e.target.id === "wrapper") onClose();
      }}
    >
      <div className="flex flex-col  bg-form-gray/95 rounded-md w-[450px] h-[550px] shadow-lg ">
        {/* header-section  */}
        <div className="flex items-center justify-between px-4 py-3 text-white">
          <div>
            <h1 className="text-xl ">Create Criminal Post</h1>
          </div>
          <div
            className="hover:rounded-full hover:bg-dark-green group p-1"
            onClick={() => onClose()}
          >
            <XMarkIcon className="h-7 w-7 group-hover:text-yellow-green" />
          </div>
        </div>
        <hr className="w-[93%] mx-auto h-[1.5px] rounded-full  bg-gray-600/25 border-0 " />

        {/* Info-Section */}
        <div className="px-4 flex-1 pb-4 mt-2 space-y-4 overflow-y-auto scrollbar">
          {/* Crime Title */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="" className="">
                Title
              </label>
              <p>{owner}</p>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Crime title"
                className="flex-1  bg-input-black outline-none text-white text-md  p-1.5 rounded-md px-2.5"
                onChange={handleTitleChange}
              />
            </div>
          </div>

          {/* Crime Type */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="" className="">
                Type
              </label>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Crime title"
                className="flex-1  bg-input-black outline-none text-white text-md  p-1.5 rounded-md px-2.5"
                onChange={handleCrimeType}
              />
            </div>
          </div>

          {/* Crime Type */}
          {/* <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="" className="">
                Type
              </label>
            </div>
            <div className="flex">
              <select
                className="flex-1  bg-input-black outline-none text-white/50 text-md  p-2 rounded-md px-1.5"
                id=""
              >
                <option selected className="text-white">
                  Crime type
                </option>
                {crimetypes.map((type) => {
                  return (
                    <option key="type" className="text-white">
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* Crime Description */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="">Description</label>
            </div>
            <div className="flex">
              <textarea
                type="text"
                placeholder="Crime description"
                className="flex-1 bg-input-black outline-none text-white text-md  p-1.5 rounded-md  scrollbar-thin scrollbar-thumb-gray-500/50 scrollbar-track-input-black scrollbar-thumb-rounded-full scrollbar-track-rounded-full px-2.5"
                onChange={handleDescChange}
              />
            </div>
          </div>
          {/* Crime Date and time */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="">Date & Time</label>
            </div>
            <div className="flex">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                className="w-full text-center bg-input-black py-1 rounded-md outline-none  text-gray-200"
              />
            </div>
          </div>

          {/* Crime Location */}
          <div className="flex flex-col space-y-2">
            <div className="">
              <label htmlFor="">Location</label>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Crime location"
                className="flex-1  bg-input-black outline-none text-white text-md  p-1.5 px-2.5 rounded-md "
                onChange={handleLocationChange}
              />
            </div>
          </div>
          {/* Crime Crime Media */}
          {/* <div className="grid grid-cols-3 pr-2 items-center">
            <div className="col-span-1">
              <label htmlFor="">Crime Media: </label>
            </div>
            <div className="col-span-2 flex">
              <input
                multiple="multiple"
                type="file"
                placeholder="Enter the crime description"
                className="flex-1  bg-transparent outline-none text-black border border-gray-300 p-1.5 rounded-md"
              />
            </div>
          </div> */}
          <button
            className="w-full bg-black  text-white px-7 py-2 hover:bg-dark-green hover:text-yellow-green hover:shadow-lg rounded-md flex items-center justify-center group"
            onClick={handleClick}
          >
            <p>Post</p>
            <ArrowPathRoundedSquareIcon className="h-5 w-5 ml-2 transition-all duration-500 ease-out group-hover:rotate-180 " />
          </button>
        </div>
        {/* Submit-Section */}
      </div>
    </div>
  );
};

export default FormModal;
