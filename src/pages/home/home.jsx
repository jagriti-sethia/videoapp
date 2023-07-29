import React, { useContext } from 'react';
import { VideoContext } from "../../context/videoContext";
import { useNavigate } from "react-router-dom";

import "./home.css";


const Home = () => {

  const { videoState } = useContext(VideoContext);
  const navigate = useNavigate();
  return (
    <div className='home-main'>
      <h2>Categories</h2>



      <div className="categories-container">
        {videoState?.categoriesData?.map((item) => (
          <div key={item?._id} className="category-card"  onClick={() => navigate(`/videos/${item?.category}`)}>
            <img src={item?.thumbnail} alt={item?.category} />
            <h4>{item?.category}</h4>
          </div>
        ))}




      </div>
    </div>
  )
}

export default Home