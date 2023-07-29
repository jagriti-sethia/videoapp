import React, { useContext } from "react";
import "./watchlater.css";
import VideoCard from '../../components/videocard/card';
import { VideoContext } from "../../context/videoContext";


const WatchLater = () => {
  const { videoState } = useContext(VideoContext);

  return (
    
      <div className="watch-later-main">
        <h2>Watch Later</h2>
        <div className="container">
          {videoState?.watchLaterVideos?.length === 0 ? (
            <p>No videos in watch later!</p>
          ) : (
            videoState?.watchLaterVideos?.map((item) => (
                <VideoCard data={item} />
            ))
          )}
        </div>
      </div>
   
  );
};

export default WatchLater;