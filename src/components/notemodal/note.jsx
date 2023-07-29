import React ,{useContext,useState}from 'react';
import"./note.css";
import { VideoContext } from "../../context/videoContext";

const Note = ({ onAddNote }) => {
    const [note,setnote] = useState ("");
    const { videoState, videoDispatch, setisadd ,addanote} =
    useContext(VideoContext);

    const inputChangeHandler = (e) => {
        setnote( e.target.value );
      };

      const saveHandler =(event) => {
        event.preventDefault();
        if (note.trim() !== '') {
          addanote(note);
          setisadd(false);
        }
      };

  return (
    <div >
        <form className='modal' 
         onSubmit={saveHandler}>
        <button className='close' onClick={() => setisadd(false)}> x </button>
        <input type="text" name='note' value={note} onChange={inputChangeHandler} />
        <button className='submit'> submit </button>
        <hr />
        </form>
   

    </div>
  )
}

export default Note;