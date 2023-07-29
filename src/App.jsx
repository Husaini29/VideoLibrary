import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Category } from './pages/category/Category'
import { SingleVideo } from './pages/singleVideo/SingleVideo'
import { Explore } from './pages/explore/Explore'
import { Playlist } from './pages/playlist/Playlist'
import { WatchLater } from './pages/watchlater/WatchLater'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/category/:category' element={<Category/>}/>
        <Route path='/video/:videoId' element={<SingleVideo/>}/>
      </Routes>
    </>
  )
}

export default App
