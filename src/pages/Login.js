import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import { login } from '../Redux/actions/authActions'
import { getTokenFromUrl, loginUrl } from '../spotify'

const spotify  =new SpotifyWebApi()

const Login = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log("this is token from derived url"  ,getTokenFromUrl());
    
        const _spotifyToken = getTokenFromUrl().access_token;
        window.location.hash=""
        console.log("this is our token",_spotifyToken);
    
        if(_spotifyToken){
    
          spotify.setAccessToken(_spotifyToken)
          spotify.getMe().then((user)=>{
            console.log("this you ",user);
            dispatch(login(user));
      
          })
          spotify.getMyTopTracks().then(ress=>console.log(ress))
        }
      })
  return (
    <div>
       <a href={loginUrl}>Sign Up with spotify</a>
    </div>
  )
}

export default Login
