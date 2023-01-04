import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  NavLink } from 'react-router-dom'
import { setPlayLists } from '../Redux/actions/playListsActions';



 const Sidebar = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get("https://api.spotify.com/v1/me/playlists")
            .then(({data})=>{
                
                dispatch(setPlayLists(data.items))
            })
            .catch(err=>console.log(err))

 })



    return (
        <div className='sidebar'>
            
           <NavLink activeclassname="active" to="/" className="nav-item d-flex my-2 align-items-center" >
                <i className="bi bi-house me-4"></i>
                Home
            </NavLink>
            <NavLink activeclassname="active" to="/browse" className="nav-item d-flex my-2 align-items-center" >
                <i className="bi bi-archive me-4"></i>
                Archive
            </NavLink>
            <NavLink activeclassname="active" to="/liked" className="nav-item d-flex mt-2 align-items-center" >
                <i className="bi bi-heart me-4" ></i>
                Liked Songs
            </NavLink>
            

            <div className='library d-flex flex-column'>
                <p className='text-uppercase text-nowrap' >Your library</p>
                
                <NavLink activeclassname="active" to="/foryou" className="nav-item2 d-flex my-2 align-items-center" >
                    Archive
                </NavLink>
                <NavLink activeclassname="active" to="/recentplayed" className="nav-item2 d-flex my-2 align-items-center" >
                    Recent Played
                </NavLink>
                <NavLink activeclassname="active" to="/albums" className="nav-item2 d-flex my-2 align-items-center" >
                    Albums
                </NavLink>
                <NavLink activeclassname="active" to="/artists" className="nav-item2 d-flex my-2 align-items-center" >
                    Artists
                </NavLink>
                <NavLink activeclassname="active" to="/localfiles" className="nav-item2 d-flex my-2 align-items-center" >
                    Local Files
                </NavLink>
                <NavLink activeclassname="active" to="/prodcasts" className="nav-item2 d-flex my-2 align-items-center" >
                    prodcasts
                </NavLink>
            </div>
            <div className='playLists d-flex flex-column'>

                <p className='text-uppercase text-nowrap' >Your playLists</p>
                <button className='add-playlist'><i className="bi bi-plus-lg me-3"></i>Add new Playlist</button>
            </div>
        </div>
       
    )
}

export default Sidebar ; 