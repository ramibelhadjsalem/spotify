import { SETCATEGORIES } from "../constants/actionTypes";

const initState ={
    catego :[] , 
    isLoading : false
}
const catego = (state = initState ,action)=>{
    const { type, payload } = action;
    switch (type) {
        case SETCATEGORIES: return{
            ...state,
            catego : payload
            
        }
          
    
        default:
            return state;
    }


}
export default catego ; 