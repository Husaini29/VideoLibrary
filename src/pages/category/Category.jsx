import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { videos } from '../../data/videos';
import { SideBar } from '../../components/sidebar/SideBar';
import "./category.css"

export const Category = () => {
    const [ selectedCategory,setSelectedCategory ] = useState('');
    const { category } = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        setSelectedCategory(videos.filter(video=>(
                video.category === category)))
    },[])

  return (
    <div className='category-details-container'>
        <SideBar/>
        <div className='category-div'>
            <h1>{category}</h1>
            <div className='category-wrapper'>
                {
                    selectedCategory && selectedCategory.map(category=>(
                    <div className="category-card" 
                        key={category._id} 
                        onClick={()=>navigate(`/video/${category._id}`)}>
                        <img src={category.thumbnail}/>
                        <div className='category-details-container'>
                            <img src={category.thumbnail} 
                                alt={category.title}
                                className='category-image' />
                            <div className='category-details'>
                                <h4>{category.title}</h4>
                                <h4>{category.category}</h4>
                                <small>{category.views} Views | {category.creator}</small>
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
