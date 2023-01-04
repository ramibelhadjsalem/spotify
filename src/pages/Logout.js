import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logout } from '../Redux/actions/authActions'

const Logout = () => {
    const dispatch = useDispatch()
    localStorage.clear()
    dispatch(logout())
  return (
    <div>
      <Navigate to="/login"/>
    </div>
  )
}

export default Logout
