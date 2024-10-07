import React from "react";
import usericon from "../utils/usericon.svg";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg my-3">
      <img className="h-8" src={usericon} alt="user"></img>
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
