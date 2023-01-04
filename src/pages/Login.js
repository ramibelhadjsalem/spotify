import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import { login } from '../Redux/actions/authActions'
import { getTokenFromUrl, loginUrl } from '../spotify'

const spotify  =new SpotifyWebApi()

const Login = () => {
    const dispatch = useDispatch()
    let location = useLocation();
    const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
    useEffect(()=>{
        const _spotifyToken = getTokenFromUrl().access_token;
        window.location.hash=""
        if(_spotifyToken){
          localStorage.setItem("token",_spotifyToken)
          spotify.setAccessToken(_spotifyToken)
          spotify.getMe().then((user)=>{
           
            dispatch(login(user,true));
            localStorage.setItem("user",JSON.stringify(user))
      
          })
       
        }
      })
    if(isLoggedin) {
       
      return <Navigate to="/" state={{ from: location}} replace />
    }
  
  return (
    <div className='login'>
       <a href={loginUrl}>Sign Up with spotify</a>
    </div>
    )
}

export default Login
