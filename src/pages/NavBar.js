import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import DarkMode from '../styles/DarkMode'

const NavBar = () => {
  const navigate = useNavigate()
  const [dropbool, setdrops] = useState(false);
  const [searchtext, setText] = useState("");
  const { user, isLoggedin } = useSelector(state => state.auth)


  //  const handeltext =(e)=>{
  //     e.preventDefault
  //     setText(e.target.value)
  //     console.log(searchtext);
  //  }
   const search =()=>{
   
   }
  return (
    <div className='navBar d-flex align-items-center justify-content-between'>
      <div className='navigation d-flex '>
        <button onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>
        <button onClick={() => navigate(1)}><i className="bi bi-arrow-right"></i></button>
      </div>
      <form onSubmit={search()}>
        <button type='submit'><i className="bi bi-search"></i></button>
        <input type="text" onChange={(e)=>{setText(e.target.value);}}/>
      </form>
      <div className='user-info d-flex'>
        {
          isLoggedin && <>
            <img src={user.images[0].url} />
            <button className='dropdown' onClick={()=>setdrops(!dropbool)}><i className="bi bi-caret-down"></i></button>
            
              <div className={dropbool? "d-block dropdown-content" :"d-none dropdown-content"}>
                <ul className='dropDownList'>
                  <li><NavLink className="nav-item3" to="/account" >Account</NavLink></li>
                  <li><NavLink className="nav-item3" to="/profile" >Profile</NavLink></li>
                  <li><NavLink className="nav-item3" to="/settings" >Settings</NavLink></li>
                  <li><NavLink className="nav-item3" to="/logout" >Logout</NavLink></li>
                  <li><DarkMode/></li>
                </ul>
              </div>
            
          </>
        }

      </div>

    </div>
  )
}

export default NavBar
