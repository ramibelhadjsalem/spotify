import { getPlayListById, SETPLAYLISTS, SetRandPlayList } from "../constants/actionTypes";


const initState ={
    myPlaylist :[] , 
    randPlayList :[],
    singlePlayList:{},
    isLoading : false
}
const playlist = (state = initState ,action)=>{
    const { type, payload } = action;
    switch (type) {
        case SETPLAYLISTS: return{
            ...state,
            myPlaylist : payload
            
        }
        case SetRandPlayList : return{
            ...state,
            randPlayList : payload,
            isLoading : false
        }
        case getPlayListById : return{
            ...state , 
            singlePlayList : payload
        }
        default:
            return state;
    }


}
export default playlist ; 