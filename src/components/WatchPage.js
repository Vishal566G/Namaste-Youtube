// WatchPage.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ShimmerPlayer from "./ShimmerPlayer";
import ShimmerChat from "./ShimmerChat";
import ShimmerComments from "./ShimmerComments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(closeMenu());

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this delay as needed
  }, [dispatch]);

  return (
    <div className="w-full overflow-y-hidden pl-20">
      <div className="flex pt-5">
        <div>
          {isLoading ? (
            <ShimmerPlayer />
          ) : (
            <iframe
              className="h-[500px] w-[850px] rounded-lg"
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="w-full overflow-y-auto">
          {isLoading ? <ShimmerChat /> : <LiveChat />}
        </div>
      </div>

      {isLoading ? <ShimmerComments /> : <CommentsContainer data={videoId} />}
    </div>
  );
};

export default WatchPage;
