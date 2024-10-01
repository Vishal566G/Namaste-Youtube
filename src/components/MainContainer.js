import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isExpanded = useSelector((store) => store.app.isMenuOpen);


  return (
    <div className={`${isExpanded ? "w-full" : "w-screen"}`}>
      <ButtonList />
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
