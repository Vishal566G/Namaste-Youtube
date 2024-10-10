const API_KEY = "AIzaSyB6sxl1tPFra4gvSIj3SeFZki6OTDIJapo";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_THREAD_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=MD7v0-igVIM&key=" + API_KEY;
