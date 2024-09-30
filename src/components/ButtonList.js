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
    "Cooking",
    "Street food",
    "Data structures",
    "Web development",
    "Reactjs",
    "Nextjs",
    "MongoDB",
    "MERN",
    "Github",
    "Css",
    "Javascript",
  ];
  return (
    <div className="flex max-w-[1300px] overflow-scroll no-scrollbar">
      {list.map((item) => {
        return <Button name={item} key={item} />;
      })}
    </div>
  );
};

export default ButtonList;
