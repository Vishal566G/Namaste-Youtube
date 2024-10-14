import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
      setLiveMessage("");

      return () => clearInterval(i);
    }, 5000);
  }, []);

  return (
    <div className="ml-3">
      <div className="w-[90%] h-[500px] p-2 border border-black bg-slate-100 overflow-y-auto rounded-lg flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="mt-2 px-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On submit");
          dispatch(
            addMessage({
              name: "Vishal",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="border border-black w-60 py-1 rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-green-400 ml-2 px-4 py-1 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
