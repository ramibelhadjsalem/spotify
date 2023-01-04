import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPlayListById } from '../../Redux/constants/actionTypes'

const ForYouPLayList = () => {
 
  const playLists = useSelector((state)=>state.playlist.randPlayList)
  // console.log(playLists);
  return (
    <div className='recentlyplayed mt-5'>
      <h3>For You</h3>
      <div className='d-flex flex-row container'>
        {
          playLists.map((playlist)=> <PlayListItem key={playlist.id} playlist={playlist}/>)
        }
      </div>

    </div>
  )
}

export default ForYouPLayList

const PlayListItem  =({playlist})=>{
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const navigateToPlayList =()=>{
    dispatch({type:getPlayListById,payload:playlist})
    navigate("/playlist/"+playlist.id)
  }
  return(
    <div className='playListItem' onClick={navigateToPlayList}>
      <img src={playlist.images[0].url}/>
      <p className='title text-nowrap m-0'>{playlist.name}</p>
      <p className='description text-nowrap m-0'>{playlist.description}</p>
    </div>
  )
}
