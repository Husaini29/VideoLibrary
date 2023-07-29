import React from 'react'
import "./home.css"
import { SideBar } from '../../components/sidebar/SideBar'
import { categories } from '../../data/Category'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <SideBar/>
        <div className='category-div'>
            <h1>Categories</h1>
            <div className='category-container'>
                {
                    categories.map(category=>(
                    <div  className="category-card" 
                        key={category._id} 
                        onClick={()=>navigate(`/category/${category.category}`)}>
                        <img src={category.thumbnail}/>
                        <p>{category.category}</p>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
