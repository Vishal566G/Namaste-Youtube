// ShimmerComments.js
import React from 'react';

const ShimmerComments = () => {
  return (
    <div className="mt-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex space-x-4 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-full bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerComments;
