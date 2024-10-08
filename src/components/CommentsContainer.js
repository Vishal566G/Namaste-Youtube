import React from "react";
import Comment from "./Comment";

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
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl mb-2">Comments:</h1>
      <CommentList comments={commentList} />
    </div>
  );
};

export default CommentsContainer;
