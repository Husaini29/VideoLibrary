import React, { useContext, useState } from 'react'
import "./explore.css"
import { SideBar } from '../../components/sidebar/SideBar'
import { videos } from '../../data/videos'
import { MdOutlineWatchLater,MdWatchLater } from 'react-icons/md'
import { WatchLaterContext } from '../../context/WatchLaterContext'

export const Explore = () => {
    const [ searchInput,setSearchInput ] = useState("");
    const { addToWatchLater,isVideoInWatchList } = useContext(WatchLaterContext)

    const searchedVideo = searchInput.length > 0 ? videos.filter(({ title })=> title.includes(searchInput)) : videos
    console.log(searchedVideo)

  return (
    <div>
        <SideBar/>
        <div className='explore-container'>
            <input 
                type='text' 
                placeholder='Search Video By Title'
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}/>
            <div className='explore-wrapper'>
                {
                    searchedVideo.map(video=>(
                        <div className="category-card" 
                            key={video._id} 
                           >
                            <img src={video.thumbnail}  onClick={()=>navigate(`/video/${video._id}`)}/>
                            <span 
                                className='watchlater-icon' 
                                onClick={()=>addToWatchLater(video)}>
                                {/* {isVideoInWatchList(video) === -1 ? <MdOutlineWatchLater/> : <MdWatchLater/>} */}
                                {isVideoInWatchList(video) === -1 ? <MdWatchLater/> : <MdOutlineWatchLater/>}
                            </span>
                            <div className='category-details-container'>
                                <img src={video.thumbnail} 
                                    alt={video.title}
                                    className='category-image' />
                                <div className='category-details'>
                                    <h4>{video.title}</h4>
                                    <h4>{video.category}</h4>
                                    <small>{video.views} Views | {video.creator}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
