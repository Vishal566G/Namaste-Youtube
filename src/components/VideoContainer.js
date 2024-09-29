import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_API);
  //   const json = await data.json();
  //   setVideos(json.items);
  // };
  return (
    <div>
      <VideoCard  />
    </div>
  );
};

export default VideoContainer;
