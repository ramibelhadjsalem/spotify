import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.auth.user);
    let location = useLocation();
    // console.log(user ==={});
   
    if(!Object.keys(user).length > 0) {
        console.error("navigation");
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;
