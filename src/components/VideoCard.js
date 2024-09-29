import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const VideoCard = () => {
  const [videos, setVideos] = useState(null); // Set initial state to null

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();

      // Check if 'items' exist and contains data
      if (json.items && json.items.length > 0) {
        setVideos(json.items[0]);
        console.log(json.items[0]);
      } else {
        console.error("No items found in response");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  if (!videos) {
    // Handle case when no video data is available
    return <div>Loading...</div>;
  }

  // Ensure snippet and statistics exist before destructuring
  const { snippet, statistics } = videos || {};

  if (!snippet) {
    return <div>Snippet data is missing.</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      {thumbnails && thumbnails.default && (
        <img
          className="w-full bg-cover"
          src={thumbnails.maxres.url}
          alt="thumbnail"
        />
      )}
      <ul>
        <li className="font-bold py-2">{title || "No title"}</li>
        <li>{channelTitle || "No channel title"}</li>
        {statistics && <li>{statistics.viewCount}</li>}
      </ul>
    </div>
  );
};

export default VideoCard;
