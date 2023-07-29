import React, { useContext,useState } from "react";
import "./singlevideo.css";

import { useParams,useNavigate } from "react-router-dom";
import VideoCard from '../../components/videocard/card';
import { VideoContext } from "../../context/videoContext";
import Note from "../../components/notemodal/note";


const SingleVideo = () => {
  
    const { ID } = useParams();
    const navigate = useNavigate();

    const { videoState, videoDispatch, isInWatchLater,setisadd, isadd } =
        useContext(VideoContext);
        const [notes, setNotes] = useState([]);
        const handleAddNote = (newNote) => {
          setNotes([...notes, newNote]);
        };
      

    const selectedVideo = videoState?.videoData?.find(
        ({ _id }) => _id === Number(ID)
    );

    const moreVideos = videoState?.videoData?.filter(
        ({ _id }) => _id !== selectedVideo?._id
    );
    return (

        
        <div className="single-video-main">
          <div className="video-content-container">
            <iframe
              src={selectedVideo?.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
            <div className="single-video-content-container">
              <div className="single-video-content-left">
                <img src="https://picsum.photos/40/40" alt="avatar" />
                <strong>{selectedVideo?.title}</strong>
              </div>
              <div className="single-video-content-right">
                {isInWatchLater(selectedVideo) ? (
                  <i
                    className="fa-solid fa-clock"
                    title="remove from watch later"
                    onClick={() =>
                      videoDispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        payload: selectedVideo,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-clock"
                    title="add to watch later"
                    onClick={() =>
                      videoDispatch({
                        type: "ADD_TO_WATCH_LATER",
                        payload: selectedVideo,
                      })
                    }
                  ></i>
                )}
                <i
                  className="fa-solid fa-square-plus"
                  title="add to playlist"
                ></i>
                <i className="fa-solid fa-square-pen" title="add notes"  onClick={() => setisadd(true)}></i>
                {isadd && (<Note/>)}
              </div>
            </div>
            <hr />
            <div className="my-notes-container">
              <h3>My Notes</h3>
              <p>{videoState?.notes}</p>
             
            </div>
          </div>
          <div className="more-videos-container">
            <h3>More Videos</h3>
            {moreVideos?.map((video) => (
              <div className="more-video-card"  onClick={() => navigate(`/video/${video?._id}`)}>
                <img src={video?.thumbnail} alt={video?.title} />
                <div>
                  <strong>{video?.title}</strong>
                  <p>{video?.creator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    );
};

export default SingleVideo;