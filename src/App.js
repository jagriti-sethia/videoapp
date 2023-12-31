import { Route, Routes } from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import VideoListing from "./pages/videolisting/videolisting";
import WatchLater from "./pages/watchlater/watchlater";
import SingleVideo from "./pages/singlevideo/singlevideo";
import Playlists from "./pages/playlist/playlist";
import SinglePlaylist from "./pages/singleplaylist/singleplaylist";

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <div className="flex-item-left">

          <Sidebar />

        </div>
        <div className="flex-item-right">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos/:categoryName" element={<VideoListing />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater/>} />
        <Route path="/video/:ID" element={<SingleVideo/>} />
        <Route path="/playlist/:playlistName" element={<SinglePlaylist />} />
      </Routes>


        </div>

      </div>

    </div>
  );
}

export default App;
