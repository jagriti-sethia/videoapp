import React,{useContext} from 'react';
import{videos} from "../../data/video";
import"./explore.css";
import { VideoContext } from "../../context/videoContext";
import VideoCard from '../../components/videocard/card';

const Explore = () => {

  const { videoState, videoDispatch } = useContext(VideoContext);
  let searchedVideos = videoState?.videoData;

  if (videoState?.search !== "") {
    searchedVideos = videoState?.videoData?.filter((video) =>
      video?.title?.trim()?.toLowerCase().includes(videoState?.search)
    );
  }

  return (
    <div className='explore-main'>
 <h2>EXPLORE</h2>
       
 <input
          placeholder="Search video by title"
          type="text"
          onChange={(e) =>
            videoDispatch({ type: "SEARCH", payload: e.target.value })
          }
        />

<div className="categories-container">
{searchedVideos?.length !== 0 ? (
searchedVideos?.map((item) => (
    <VideoCard data={item} />
  ))):( <p>No videos found!</p>)}

        </div>
    </div>
  )
}

export default Explore