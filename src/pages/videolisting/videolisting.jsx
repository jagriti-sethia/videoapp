import React, { useContext } from "react";
import "./videolisting.css";
import { VideoContext } from "../../context/videoContext";
import { useParams } from "react-router-dom";
import VideoCard from '../../components/videocard/card';

const VideoListing = () => {
  const { videoState } = useContext(VideoContext);
  const { categoryName } = useParams();

  let filteredVideos = [];

  if (categoryName) {
    filteredVideos = videoState?.videoData?.filter(
      ({ category }) =>
        category?.toLowerCase()?.trim() === categoryName?.toLowerCase().trim()
    );
  }

  return (
    
      <div className="video-listing-main">
        <h2>{categoryName}</h2>
        <div className="video-listing-container">
          {filteredVideos?.map((item) => (
           <VideoCard data={item} />
          ))}
        </div>
      </div>
    
  );
};

export default VideoListing;