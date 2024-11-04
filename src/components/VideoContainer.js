// VideoContainer.js
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isExpanded = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  return (
    <div className={`flex flex-wrap ${isExpanded ? "w-full" : "w-screen"}`}>
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        // Render multiple ShimmerCards to simulate loading
        Array.from({ length: 8 }).map((_, index) => <ShimmerCard key={index} />)
      )}
    </div>
  );
};

export default VideoContainer;
