import React from "react";
import usericon from "../utils/usericon.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 text-sm hover:rounded-lg hover:cursor-pointer hover:bg-slate-300">
      <img className="h-8" src={usericon} alt="user-icon" />
      <span className="font-semibold px-2">{name}</span>
      <span className="whitespace-normal">{message}</span>
    </div>
  );
};

export default ChatMessage;
