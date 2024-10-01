import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const expand = useSelector((store) => store.app.isMenuOpen)

  const list = [
    "All",
    "Music",
    "News",
    "Tech",
    "Global",
    "Environment",
    "Politics",
    "Cooking",
    "Street food",
   
  ];
  return (
    <div className="flex w-full overflow-auto no-scrollbar">
      {list.map((item) => {
        return <Button name={item} key={item} />;
      })}
    </div>
  );
};

export default ButtonList;
