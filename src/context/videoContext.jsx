import React, { createContext, useReducer } from "react";
import { videos } from "../data/video";
import { videoReducer } from "../reducer/videoReducer";
import { categories } from "../data/category";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialState = {
    videoData: videos,
    categoriesData: categories,
    search: "",
    watchLaterVideos: [],
  };

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

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