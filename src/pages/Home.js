import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../Redux/Data/Categories'
import { getRandPlaylist } from '../Redux/Data/PlayLists'
import { getRecentlyPLayed } from '../Redux/Data/trucks'
import ForYouPLayList from './Components/ForYouPLayList'
import RecentlyPlayed from './Components/RecentlyPlayed'


const Home = () => {
  const dispatch = useDispatch();
  const recentlyPlayed = useSelector((state)=>state.trucks)
  console.log(recentlyPlayed);
  useEffect(()=>{
    dispatch(getCategories())
    dispatch(getRecentlyPLayed())
    dispatch(getRandPlaylist())
  },[recentlyPlayed])
  
  return (
    
    <div >
       <RecentlyPlayed/>
       <ForYouPLayList/>
    </div>
  )
}

export default Home
