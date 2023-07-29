import React, { useContext, useState } from "react";
import "./modal.css";
import { VideoContext } from "../../context/videoContext";

const AddModal = ({ addModal, setAddModal }) => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
    src: "https://source.unsplash.com/random/800x800/?playlist",
  });

  const { videoDispatch } = useContext(VideoContext);

  const addHandler = () => {
    videoDispatch({ type: "ADD_PLAYLIST", payload: playlistData });
    setAddModal({ ...addModal, show: false });
  };

  return (
    <div className="add-modal-container">
      <div className="add-modal">
        <div className="add-modal-header">
          <h3>{addModal?.type}</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setAddModal((prev) => ({ ...prev, show: false }))}
          ></i>
        </div>
        <div className="modal-content">
          <input
            type="text"
            placeholder="Enter title of your playlist"
            value={playlistData?.name}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, name: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Write a description"
            rows={5}
            value={playlistData?.description}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, description: e.target.value })
            }
          ></textarea>
          <button onClick={addHandler}>Create new Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;