import React from 'react'
import { useSelector } from 'react-redux'
const RecentlyPlayed = () => {
  const recentlyplayed = useSelector((state) => state.trukcs.recentlyPlayed)
  return (
    <div className='recentlyplayed my-1'>
      <h3>Recently Played</h3>
      <div className='d-flex flex-row container'>
        {
          recentlyplayed.map((track, index) => <Item key={index} track={track} />)
        }
      </div>

    </div>
  )
}

export default RecentlyPlayed

export const Item = ({track}) => {
  let audio = new Audio(track.track.preview_url)
  const start = () => {
    audio.play()
  }
  const stop =()=>{
    audio.pause()
  }

 
  return (
    <div className='item_recently_played d-flex flex-column mb-0'  >
      <img  src={track.track.album.images[0].url}/>
      <p 
        onMouseEnter={start} onMouseLeave={stop}
        className='title text-nowrap m-0'>{track.track.name}</p>
      <p className='artists mt-0 ms-0'>{track.track.artists[0].name}</p>
    </div>
  )
}
