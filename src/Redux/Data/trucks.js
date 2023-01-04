import axios from "axios"
import { setRecentlyPlayed } from "../actions/trucksactions"
import { recentplayedUrl } from "../constants/api"

export const getRecentlyPLayed = ()=>{
    return (dispatch)=>{
        return axios.get(recentplayedUrl)
            .then(({data})=>{
                dispatch(setRecentlyPlayed(data.items))
            })
            .catch(err=>console.log(err))
    }
}