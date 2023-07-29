import React, { useContext, useEffect, useState } from 'react'
import "./singlevideo.css"
import { useNavigate, useParams } from 'react-router-dom'
import { videos } from '../../data/videos';
import { SideBar } from '../../components/sidebar/SideBar';
import { MdOutlineWatchLater,MdWatchLater,MdPlaylistAdd,MdOutlinePlaylistAddCheck } from 'react-icons/md'
import { WatchLaterContext } from '../../context/WatchLaterContext';

export const SingleVideo = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState('');
    const [ allVideos, setAllVideos ] = useState('');
    const { addToWatchLater,watchLater } = useContext(WatchLaterContext);
    
    console.log(watchLater)
    useEffect(()=>{
        setVideoDetail(videos.find(({ _id })=> _id === Number(videoId)))
        setAllVideos(videos.filter(({ _id })=> _id !== Number(videoId)))
    },[]);

  return (
    <div>
        <SideBar/>
        <div className='video-container-main'>
            {
                videoDetail && (<div className='video-details-container'>
                <iframe src={videoDetail.src}
                    className='video-link'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'/>
                <div className='video-details-wrapper'>
                    <div className='video-details'>
                        <img className="video-thumbnail" src={videoDetail.thumbnail} alt={videoDetail.title}/>
                        <h4>{videoDetail.title}</h4>
                    </div>
                    <div>
                        <span className='video-icons' onClick={()=>addToWatchLater(videoDetail)}><MdOutlineWatchLater/></span>
                        <span className='video-icons'><MdPlaylistAdd/></span>
                        <span className='video-icons'><MdOutlinePlaylistAddCheck/></span>
                    </div>
                </div>
                <hr/>
                <h2>My Notes</h2>
            </div>)
            }
            <div>
                <h3>More Videos:</h3>
                <div>
                    {
                        allVideos && allVideos.map(video=>(
                            <div className='more-video-container' 
                                key={video._id}>
                                <img className='more-video-img' 
                                    src={video.thumbnail} alt={video.title}/>
                                <div className='more-video-details'>
                                    <h4>{video.title}</h4>
                                    <p>{video.creator}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
