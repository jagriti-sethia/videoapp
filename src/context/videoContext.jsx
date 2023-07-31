import React, { createContext,useEffect, useReducer,useState } from "react";
import { videos } from "../data/video";
import { videoReducer } from "../reducer/videoReducer";
import { categories } from "../data/category";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [isadd, setisadd] = useState(false);
  const initialState = {
    videoData: JSON.parse(localStorage.getItem("videos"))?.videoData ?? videos,
    categoriesData: categories,
    search: "",
    watchLaterVideos:
    JSON.parse(localStorage.getItem("videos"))?.watchLaterVideos ?? [],
  playlists: JSON.parse(localStorage.getItem("videos"))?.playlists ?? [
    {
      src: "https://picsum.photos/300/179",
      name: "Music Videos",
      description: "my personal favourites",
    },
  ],
};

const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

useEffect(() => {
  localStorage.setItem("videos", JSON.stringify(videoState));
}, [videoState]);

const isInWatchLater = (videoToCheck) =>
  videoState.watchLaterVideos.find(
    (video) => video?._id === videoToCheck?._id
  );

return (
  <VideoContext.Provider
    value={{ videoState, videoDispatch, isInWatchLater }}
  >
    {children}
  </VideoContext.Provider>
);
};

export default VideoProvider;