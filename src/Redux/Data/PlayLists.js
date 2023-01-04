import axios from "axios"
import SpotifyWebApi from "spotify-web-api-js"
import { setRandPlayList } from "../actions/playListsActions"
import { randPlayList } from "../constants/api"
const spotify = new SpotifyWebApi()
export const getMyPlaylist = ()=>{
    return axios.get("https://api.spotify.com/v1/me/playlists")
        .then 

}
export const getRandPlaylist = ()=>{
    return (dispatch)=>{
        return axios.get(randPlayList)
            .then(({data})=>{
                dispatch(setRandPlayList(data.playlists.items))})
            .catch(err=>console.log(err))


    }
}
export const getPlayListById=(url)=>{
    return (dispatch)=>{

        return axios.get(url)
            .then(({data})=>dispatch(getPlayListById( data)))
            .catch(err=>console.log(err))
    }
}