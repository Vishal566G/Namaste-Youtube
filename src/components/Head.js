import React, { useEffect, useState } from "react";
import hamburgur from "../utils/hamburgur.svg";
import Youtube_logo from "../utils/youtube.svg";
import usericon from "../utils/usericon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // API call after every key stroke
    // If diff b/w two strokes is < 200 ms => decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call - " + searchQuery);
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json[1]);
      setSuggestion(json[1]);

      // Update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error Fetching Search API Data: ", error);
    }
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1 justify-around">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          src={hamburgur}
          alt="Hamburgur"
        />
        <Link to={"/"}>
          {" "}
          <img className="h-7" src={Youtube_logo} alt="logo" />
        </Link>
      </div>

      <div className="col-span-10 text-center">
        <div>
          <input
            className="border w-1/2 border-gray-500 rounded-l-full py-2 px-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-gray-100 py-2 px-5 ml-[17rem] w-[33rem] shadow-2xl rounded-lg">
            <ul className="flex flex-col">
              {suggestion.map((s) => (
                <li key={s} className="text-start py-1 px-2 hover:bg-white">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={usericon} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
