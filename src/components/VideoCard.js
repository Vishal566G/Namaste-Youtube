import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No video information available.</div>;
  }

  // Ensure that snippet and statistics exist before destructuring
  const { snippet, statistics } = info || {};

  if (!snippet) {
    return <div>Snippet data is missing.</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-6/12 shadow-lg">
      {thumbnails && thumbnails.default && (
        <img src={thumbnails.medium.url} alt="thumbnail" />
      )}
      <ul>
        <li className="font-bold">{title || "No title"}</li>
        <li>{channelTitle || "No channel title"}</li>
        {statistics && <li>{statistics.viewCount}</li>}
      </ul>
    </div>
  );
};

export default VideoCard;
