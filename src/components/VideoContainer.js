import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items); // Ensure that the items array is correctly set
      console.log(json.items);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }
  };

  // Only render VideoCard if videos are available
  return (
    <div className="flex">
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard info={video} key={video.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoContainer;
