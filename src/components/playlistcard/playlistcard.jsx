import React, { useContext } from "react";
import "./playlistcard.css";
import { VideoContext } from "../../context/videoContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaylistCard = ({ playlist }) => {
  const { videoDispatch } = useContext(VideoContext);
  const navigate = useNavigate();

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlist/${playlist?.name}`)}
    >
      <i
        className="fa-solid fa-circle-xmark"
        title="delete playlist"
        onClick={(e) => {
          e.stopPropagation();
          videoDispatch({ type: "DELETE_PLAYLIST", payload: playlist?.name });
          toast.warn("Playlist is deleted");
        }}
      ></i>
      <img src={playlist?.src} alt={playlist?.name} />
      <h4>
        {playlist?.name} ({playlist?.videos?.length})
      </h4>
      <span>{playlist?.description}</span>
    </div>
  );
};

export default PlaylistCard;