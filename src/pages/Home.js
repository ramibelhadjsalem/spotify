import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, redirect } from 'react-router-dom'
import { loginUrl } from '../spotify'
import DarkMode from '../styles/DarkMode'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(state=>state.auth.user)
console.log(user);
  
  useEffect(()=>{
   
    if (user== null) {
      navigate("/login")
    }
  },[])

 
  return (
  
    <div>
      
        <DarkMode/>
        <a href={loginUrl}>Sign Up with spotify</a>
        <h1>Sunt enim veniam eiusmod labore fugiat laborum. Occaecat irure duis aliquip sunt eiusmod. Officia in nisi quis nulla laborum irure culpa commodo. Consequat exercitation anim cupidatat pariatur est. Dolore occaecat adipisicing reprehenderit eu ullamco enim id reprehenderit aute. Est in sit commodo Lorem proident amet mollit ad ut consectetur eiusmod laborum eiusmod. Minim ipsum consequat laborum sit tempor voluptate et.</h1>
    </div>
  )
}

export default Home
