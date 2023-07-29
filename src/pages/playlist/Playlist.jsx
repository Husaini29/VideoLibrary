import React from 'react'
import "./playlist.css"
import { SideBar } from '../../components/sidebar/SideBar'

export const Playlist = () => {
  return (
    <div>
        <SideBar/>
        <div className='playlist-container'>
            <h2>Playlist</h2>
        </div>
    </div>
  )
}
