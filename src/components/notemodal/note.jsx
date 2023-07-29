import React ,{useContext}from 'react';
import"./note.css";
import { VideoContext } from "../../context/videoContext";

const Note = () => {
    const { videoState, videoDispatch, setisadd } =
    useContext(VideoContext);
  return (
    <div >
        <form className='modal' 
        >
        <button className='close' onClick={() => setisadd(false)}> x </button>
        <input type="text" />
        <button className='submit'> submit </button>
        <hr />
        </form>
   

    </div>
  )
}

export default Note;