import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "News",
    "Tech",
    "Global",
    "Environment",
    "Politics",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "All",
    "MyBabes",
    "All",
    "All",
    "All",
    "All",
    "All",
  ];
  return (
    <div className="flex max-w-[1300px] overflow-scroll no-scrollbar">
      {list.map((item) => {
        return <Button name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
