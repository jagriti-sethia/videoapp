import React, { useContext } from "react";
import "./playlistcard.css";
import { VideoContext } from "../../context/videoContext";

const PlaylistCard = ({ playlist }) => {
  const { videoDispatch } = useContext(VideoContext);

  return (
    <div className="playlist-card">
      <i
        className="fa-solid fa-circle-xmark"
        title="delete playlist"
        onClick={() =>
          videoDispatch({ type: "DELETE_PLAYLIST", payload: playlist?.name })
        }
      ></i>
      <img src={playlist?.src} alt={playlist?.name} />
      <h4>{playlist?.name}</h4>
      <span>{playlist?.description}</span>
    </div>
  );
};

export default PlaylistCard;