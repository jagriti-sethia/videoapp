import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.css";
const Sidebar = () => {

    const getActiveStyle = ({ isActive }) => ({
        color: isActive && "blue",
        backgroundColor: isActive && "var(--primary-color)",
    });







    return (
        <div>
            <div className="sidenav">
                <NavLink to="/" className="left-sidebar-items" style={getActiveStyle}>
                    <i class="fa fa-home"></i><span>HOME</span>
                </NavLink>
                <NavLink to="/explore" className="left-sidebar-items" style={getActiveStyle}>
                    <i class="fa fa-compass"></i><span>EXPLORE</span>
                    </NavLink>
                <NavLink to="/playlist" className="left-sidebar-items" style={getActiveStyle}>
                    <i class="fas fa-play-circle"></i>PLAYLISTS
                    </NavLink>
                <NavLink to="/watchlater" className="left-sidebar-items" style={getActiveStyle}>
                    <i class="fa-solid fa-clock"></i>{""}WATCH LATER
                    </NavLink>
            </div>






        </div>
    )
}

export default Sidebar