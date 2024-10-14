import React, { useEffect } from "react";
import Comment from "./Comment";
import { API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const commentList = [
  {
    name: "Vishal",
    text: "Hello world",
    replies: [
      {
        name: "Vishal",
        text: "Hello world",
        replies: [
          {
            name: "Vishal",
            text: "Hello world",
            replies: [
              {
                name: "Vishal",
                text: "Hello world",
                replies: [
                  {
                    name: "Vishal",
                    text: "Hello world",
                    replies: [
                      {
                        name: "Vishal",
                        text: "Hello world",
                        replies: [
                          {
                            name: "Vishal",
                            text: "Hello world",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Vishal",
        text: "Hello world",
        replies: [
          {
            name: "Vishal",
            text: "Hello world",
            replies: [
              {
                name: "Vishal",
                text: "Hello world",
                replies: [
                  {
                    name: "Vishal",
                    text: "Hello world",
                    replies: [
                      {
                        name: "Vishal",
                        text: "Hello world",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Vishal",
        text: "Hello world",
        replies: [],
      },
    ],
  },
  {
    name: "Vishal",
    text: "Hello world",
    replies: [
      {
        name: "Vishal",
        text: "Hello world",
        replies: [
          {
            name: "Vishal",
            text: "Hello world",
            replies: [
              {
                name: "Vishal",
                text: "Hello world",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vishal",
    text: "Hello world",
    replies: [
      {
        name: "Vishal",
        text: "Hello world",
        replies: [
          {
            name: "Vishal",
            text: "Hello world",
            replies: [],
          },
        ],
      },
      {
        name: "Vishal",
        text: "Hello world",
        replies: [
          {
            name: "Vishal",
            text: "Hello world",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Vishal",
    text: "Hello world",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} key={index} />
      <div className="ml-4 border border-l-black rounded-lg">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const [searchParams] = useSearchParams("v");

  useEffect(() => {
    try {
      getCommentThreads();
    } catch (err) {
      console.error("Error fetching comment data:", err);
    }
  }, []);
  
  const getCommentThreads = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=" +
        searchParams.get("v") +
        "&key=" +
        API_KEY
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl mb-2">Comments:</h1>
      <CommentList comments={commentList} />
    </div>
  );
};

export default CommentsContainer;
