import React from "react";
import hamburgur from "../utils/hamburgur.svg";
import Youtube_logo from "../utils/youtube.svg";
import usericon from "../utils/usericon.svg";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1 justify-around">
        <img className="h-7" src={hamburgur} alt="Hamburgur" />
        <img className="h-7" src={Youtube_logo} alt="logo" />
      </div>

      <div className="col-span-10 text-center">
        <input
          className="border w-1/2 border-gray-500 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
