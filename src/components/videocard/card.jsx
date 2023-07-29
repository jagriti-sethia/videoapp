import React , { useContext } from 'react'
import"./card.css";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../context/videoContext";


const VideoCard = ({data}) => {

  const navigate = useNavigate();
  const { videoDispatch, isInWatchLater } = useContext(VideoContext);
  
  return (
    <div className='card' key={data._id}>
       {isInWatchLater(data) ? (
        <i
          className="fa-solid fa-clock"
          title="remove from watch later"
          onClick={() =>
            videoDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: data })
          }
        ></i>
      ) : (
        <i className="fa-regular fa-clock" title="add to watch later" onClick={() =>
          videoDispatch({ type: "ADD_TO_WATCH_LATER", payload: data })
        }></i>
      )}

        <img src={data.thumbnail} alt={data.creator}   onClick={() => navigate(`/video/${data?._id}`)}/>
               
        <div className="video-card-content">
        <img src="https://picsum.photos/40/40" alt="avatar" />
        <div>
          <strong>{data?.title}</strong>
          <span>
            {data?.views} | {data?.creator}
          </span>
        </div>
      </div>
        </div>
  )
}

export default VideoCard