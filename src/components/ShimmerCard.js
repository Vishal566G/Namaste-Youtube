// ShimmerCard.js
import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg flex flex-col rounded-lg animate-pulse bg-gray-200">
      {/* Thumbnail */}
      <div className="rounded-lg w-full h-40 mb-2 bg-gray-300"></div>

      {/* Title */}
      <div className="h-4 mb-1 w-3/4 bg-gray-300 rounded"></div>

      {/* Channel name */}
      <div className="h-4 mb-1 w-1/2 bg-gray-300 rounded"></div>

      {/* Views */}
      <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default ShimmerCard;
