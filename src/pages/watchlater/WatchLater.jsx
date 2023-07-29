import React, { useContext } from 'react'
import "./watchlater.css"
import { SideBar } from '../../components/sidebar/SideBar'
import { WatchLaterContext } from '../../context/WatchLaterContext'
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md"

export const WatchLater = () => {
    const { watchLater,isVideoInWatchList } = useContext(WatchLaterContext);

  return (
    <div>
        <SideBar/>
        <div className='watchlater-container'>
            <h2>Watch Later</h2>
            <div className='watchlater-wrapper'>
            {
                watchLater && watchLater.map(video=>
                <div className="category-card" 
                    key={video._id} 
                    onClick={()=>navigate(`/video/${video._id}`)}>
                        <img src={video.thumbnail}/>
                        <span className='watchlater-icon'>
                            {isVideoInWatchList(video) === -1 ? <MdOutlineWatchLater/> : <MdWatchLater/>}
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
            </div>)
            }
        </div>
        </div>
    </div>
  )
}
