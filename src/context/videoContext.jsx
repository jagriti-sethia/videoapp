import React, { createContext, useReducer,useState } from "react";
import { videos } from "../data/video";
import { videoReducer } from "../reducer/videoReducer";
import { categories } from "../data/category";

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [isadd, setisadd] = useState(false);
  const initialState = {
    videoData: videos,
    categoriesData: categories,
    search: "",
    watchLaterVideos: [],
    notes : [],
    playlists: [
      {
        src: "https://picsum.photos/300/179",
        name: "Music Videos",
        description: "my personal favourites",
      },
    ],
  };

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const addanote = (note) => {
    videoDispatch({ type: "ADD_NOTE", payload: note })
}

  const isInWatchLater = (videoToCheck) =>
    videoState.watchLaterVideos.find(
      (video) => video?._id === videoToCheck?._id
    );

  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, isInWatchLater,isadd, setisadd,addanote }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;