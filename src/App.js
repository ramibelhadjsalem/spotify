import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // , Redirect,Navigate
} from "react-router-dom";
import { useNavigate } from "react-router-dom"

import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from  "spotify-web-api-js"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Redux/actions/authActions';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
const spotify  =new SpotifyWebApi()
function App() {
 

  const dispatch = useDispatch()
  const body = document.body;
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    body.classList.add("dark");
    
  } else {
    body.classList.add("light");
  }
  
  
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
      <Router>
        <Routes>
        <Route exact path="/" element={
            <ProtectedRoute>
            <Home/>
        </ProtectedRoute>
     }/>
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
