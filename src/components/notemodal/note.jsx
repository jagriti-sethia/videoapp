import React ,{useContext,useState}from 'react';
import"./note.css";
import { VideoContext } from "../../context/videoContext";

import { toast } from "react-toastify";

const AddNote = ({
  addNoteModal,
  setAddNoteModal,
  editNoteModal,
  setEditNoteModal,
  note,
  currentVideo,
}) => {
  const { videoDispatch } = useContext(VideoContext);
  const [noteData, setNoteData] = useState({
    id: note ? note.id : Math.random(),
    text: note ? note.text : "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (note) {
      videoDispatch({
        type: "EDIT_NOTE",
        payload: {
          note: { ...note, text: noteData.text, id: noteData.id },
          videoId: currentVideo?._id,
          noteId: note?.id,
        },
      });
      toast.success("Note is edited successfully");
    } else {
      videoDispatch({
        type: "ADD_NOTE",
        payload: {
          note: { ...note, text: noteData.text, id: noteData.id },
          videoId: currentVideo?._id,
          noteId: note?.id,
        },
      });
      toast.success("Note is added successfully");
    }
    setNoteData("");
    setAddNoteModal && setAddNoteModal({ ...addNoteModal, show: false });
    setEditNoteModal && setEditNoteModal({ ...editNoteModal, show: false });
  };

  return (
    <div className="add-modal-container">
      <div className="add-modal">
        <div className="add-modal-header">
          <h3>{addNoteModal ? addNoteModal.type : editNoteModal.type}</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() =>
              setAddNoteModal
                ? setAddNoteModal((prev) => ({ ...prev, show: false }))
                : setEditNoteModal((prev) => ({ ...prev, show: false }))
            }
          ></i>
        </div>
        <form className="modal-content" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Write a note"
            value={noteData.text}
            onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
            required
          />
          <button type="submit">{note ? "Edit Note" : "Add new Note"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;