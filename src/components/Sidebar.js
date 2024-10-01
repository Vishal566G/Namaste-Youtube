import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-6 shadow-lg w-48">
      <ul className="whitespace-nowrap">
        <Link to={"/"}>
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
            Home
          </li>
        </Link>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Shorts
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Subscriptions
        </li>
      </ul>

      <div className="w-[150px] h-[0.5px] bg-black mt-3" />

      <h1 className="font-bold mt-4">You {">"}</h1>
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Your channel
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          History
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Playlist
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Your videos
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Your course
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Watchlater
        </li>
      </ul>

      <div className="w-[150px] h-[0.5px] bg-black mt-3" />

      <h1 className="font-bold mt-4">Subscriptions</h1>
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap whitespace-nowrap">
          Code with Harry
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Akshat saini
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Chai or code
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Hitesh choudhary
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg whitespace-nowrap">
          Technical suneja
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
