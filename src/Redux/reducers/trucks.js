import { SETRECENTLYPLAYED } from "../constants/actionTypes";

const initState ={
    recentlyPlayed :[] , 
    isLoading : false
}
const trukcs = (state = initState ,action)=>{
    const { type, payload } = action;
    switch (type) {
        case SETRECENTLYPLAYED: return{
            ...state,
            recentlyPlayed : payload
        }
          
    
        default:
            return state;
    }


}
export default trukcs ; 