import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No video information available.</div>;
  }

  const { snippet, statistics } = info || {};

  if (!snippet) {
    return <div>Snippet data is missing.</div>;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg flex flex-col justify-between">
      {/* Thumbnail */}
      {thumbnails && thumbnails.medium && (
        <img
          className="rounded-lg w-full h-40 object-cover"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
      )}

      {/* Video info */}
      <ul className="mt-2 flex-1 flex flex-col justify-between">
        <li className="font-bold text-sm line-clamp-2">{title || "No title"}</li>
        <li className="text-gray-500 text-xs">{channelTitle || "No channel title"}</li>
        {statistics && <li className="text-gray-600 text-xs">{statistics.viewCount} views</li>}
      </ul>
    </div>
  );
};

export default VideoCard;
