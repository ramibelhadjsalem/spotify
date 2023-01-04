import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { MemoryRouter } from 'react-router';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch } from 'react-redux';
import { login } from './Redux/actions/authActions';
import SideBar from './pages/SideBar';
import axios from 'axios';
import NavBar from './pages/NavBar';
import Liked from './pages/Liked';
import Logout from './pages/Logout';
import PlayList from './pages/PlayList';

function App() {
 
 
  axios.interceptors.request.use(function (config) {

 
    const token =localStorage.getItem("token")
    if(token){
      config.headers.Authorization = `Bearer ${token}` 
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//   axios.interceptors.response.use(response => {
//     return response;
//  }, error => {
//    if (error.response.status === 401) {
//       navigate("/login")
//    }
//    return error;
//  });



  const dispatch = useDispatch()
  const body = document.body;
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    body.classList.add("dark");

  } else {
    body.classList.add("light");
  }
  const user = localStorage.getItem("user")
  if (user) {
    dispatch(login(JSON.parse(user), true))
  }



  return (
    <div className='App'>


      <Router history={MemoryRouter}>

        <SideBar />
        <div className='right-side'>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/playlist/:id" element={<PlayList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
