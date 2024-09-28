import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  
  return (
    <div className="p-6 shadow-lg w-48">
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Home
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Shorts
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Subscriptions
        </li>
      </ul>

      <div className="w-[150px] h-[0.5px] bg-black mt-3" />

      <h1 className="font-bold mt-4">You {">"}</h1>
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Your channel
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          History
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Playlist
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Your videos
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Your course
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Watchlater
        </li>
      </ul>

      <div className="w-[150px] h-[0.5px] bg-black mt-3" />

      <h1 className="font-bold mt-4">Subscriptions</h1>
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Code with Harry
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Akshat saini
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Chai or code
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Hitesh choudhary
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          Technical suneja
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
