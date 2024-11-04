// ShimmerChat.js
import React from 'react';

const ShimmerChat = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 w-full">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-6 w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
};

export default ShimmerChat;
