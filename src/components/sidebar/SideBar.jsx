import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdExplore,MdPlaylistAdd,MdWatchLater } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import "./sidebar.css"

export const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='sidebar-container' >
      <div className='sidebar-icons-div' onClick={()=> navigate("/")}>
        <AiFillHome/>
        <span className='sidebar-icon-tags'>
          Home
        </span>
      </div>
      <div className='sidebar-icons-div' onClick={()=> navigate("/explore")}>
        <MdExplore/>
        <span className='sidebar-icon-tags'>
          Explore
        </span>
      </div>
      <div className='sidebar-icons-div' onClick={()=> navigate("/playlist")}>
        <MdPlaylistAdd/>
        <span className='sidebar-icon-tags'>
          Playlist
        </span>
      </div>
      <div className='sidebar-icons-div' onClick={()=> navigate("/watchlater")}>
        <MdWatchLater/>
        <span className='sidebar-icon-tags'>
          Watch Later
        </span>
      </div>
      </div>
  )
}
