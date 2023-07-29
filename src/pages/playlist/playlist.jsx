import React, { useContext, useState } from "react";
import "./playlist.css";

import { VideoContext } from "../../context/videoContext";
import PlaylistCard from "../../components/playlistcard/playlistcard";
import AddModal from "../../components/playlistmodal/modal";

const Playlists = () => {
  const { videoState } = useContext(VideoContext);

  const [addModal, setAddModal] = useState({ show: false, type: "" });

  return (
<div>
      <div className="playlists-main">
        <h2>Playlists</h2>
        <div className="playlist-container">
          {videoState?.playlists?.length !== 0 ? (
            videoState?.playlists?.map((playlist) => (
              <PlaylistCard key={playlist?.name} playlist={playlist} />
            ))
          ) : (
            <p>No playlists found! Add a new playlist.</p>
          )}
          <i
            className="fa-regular fa-square-plus add-button"
            title="add playlist"
            onClick={() =>
              setAddModal({ ...addModal, show: true, type: "Add To Playlist" })
            }
          ></i>
        </div>
      </div>
      {addModal.show && (
        <AddModal addModal={addModal} setAddModal={setAddModal} />
      )}
   </div>
  );
};

export default Playlists;