import React, { useContext, useState } from "react";
import "./modal.css";
import { VideoContext } from "../../context/videoContext";
import { toast } from "react-toastify";

const AddModal = ({ addModal, setAddModal, fromSingleVideo, video }) => {
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
    src: "https://source.unsplash.com/random/800x800/?playlist",
  });

  const { videoDispatch, videoState } = useContext(VideoContext);

  const addHandler = (e) => {
    e.preventDefault();
    if (
      videoState?.playlists?.some(
        (playlist) =>
          playlist?.name?.toLowerCase().trim() !== playlistData?.name?.toLowerCase().trim()
      )
    ) {
      videoDispatch({ type: "ADD_PLAYLIST", payload: playlistData });
      toast.success("Playlist is created");
    } else {
      toast.error("This playlist is already exists!");
    }
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
        <form className="modal-content" onSubmit={addHandler}>
          <input
            type="text"
            placeholder="Enter title of your playlist"
            value={playlistData?.name}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, name: e.target.value })
            }
            required
          />
          <textarea
            type="text"
            placeholder="Write a description"
            rows={5}
            value={playlistData?.description}
            onChange={(e) =>
              setPlaylistData({ ...playlistData, description: e.target.value })
            }
            required
          ></textarea>
          <button type="submit">Create new Playlist</button>
        </form>
        {fromSingleVideo && (
          <div className="playlist-list">
            {videoState?.playlists?.map((playlist) => (
              <div key={playlist?.name} className="playlist-item">
                <p
                  onClick={() => {
                    if (
                      playlist?.videos?.some(({ _id }) => _id === video?._id)
                    ) {
                      toast.error("This video is already exists in the playlist!");
                    } else {
                      videoDispatch({
                        type: "ADD_VIDEO_TO_PLAYLIST",
                        payload: { video: video, playlistName: playlist?.name },
                      });
                      toast.success("Video is added to playlist");
                    }
                    setAddModal({ ...addModal, show: false });
                  }}
                >
                  {playlist?.name}
                </p>
                <i
                  className="fa-solid fa-circle-xmark"
                  title="delete playlist"
                  onClick={() => {
                    videoDispatch({
                      type: "DELETE_PLAYLIST",
                      payload: playlist?.name,
                    });
                    toast.warn("Playlist is deleted");
                  }}
                ></i>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddModal;