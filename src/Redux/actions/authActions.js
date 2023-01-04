import { LOGIN, LOGOUT } from "../constants/actionTypes";

export const login=(user,isLoggedin)=>({
    type: LOGIN,
    payload: {user,isLoggedin},
  });

export const logout =()=>({
  type:LOGOUT
})
  