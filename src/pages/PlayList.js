import axios from 'axios';
import React, { useEffect, useState,  } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const PlayList = () => {
    const { id } = useParams("id")
    const navigate = useNavigate()
    const [items,setItems] = useState([])
    const playList = useSelector((state) => state.playlist.singlePlayList)
    useEffect(()=>{
        console.log(playList);
        if(Object.keys(playList).length === 0)  navigate("/")

        axios.get(playList.tracks.href)
            .then(({data})=>setItems(data.items))
            .catch(err=>console.log(err))
    },[playList])


    return (
       <div className="playlistpage">
            <div className='discription d-flex flex-row  mt-5 p-4'>
                <img src={playList.images[0].url}/>
                <div className='details d-flex flex-column justify-content-evenly p-4 '>
                    <p className='type'>{playList.type}</p>
                    <h1 className='title '>{playList.name}</h1>
                    <p className='desc'>{playList.description}</p>

                    <p className='owner'> by {playList.owner.display_name} . {playList.tracks.total } tracks</p>
                </div>
               
            </div>
            <div className='d-flex flex-column'>
                    {  
                        items.map(item=><Track key={item.track.id} track={item}/>)
                    }
                </div>
       </div>


    )
}

export default PlayList


export const Track = ({track})=>{
    console.log(track);
    let audio = new Audio(track.track.preview_url)
    const start = () => {
        audio.play()
    }
    const stop =()=>{
        audio.pause()
    }
    return(
        <div className='row w-100'>
            <div className='col-3 p-1 d-flex flex-row align-items-center'>
                <img src={track.track.album.images[0].url} height={50} width={50} onMouseEnter={start} onMouseLeave={stop}/>
                <div className='p-2'>
                    <p className='title m-0'>{track.track.name}</p>
                    <p className='artist'>{track.track.artists[0].name}</p>
                </div>
            </div>
            <div className='col-3 p-1'>{track.track.album.name}</div>
            <div className='col-3 p-1'>{track.added_at}</div>
            <div className='col-3 p-1'>{Math.floor(track.track.duration_ms/60000)}:{Math.floor( track.track.duration_ms%60)}</div>
        </div>
    )
}