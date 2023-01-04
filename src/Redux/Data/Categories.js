import axios from "axios"
import { setCategories } from "../actions/categorieActions"
import { categoriesUrl } from "../constants/api"

export const getCategories = ()=>{
    return (dispatch)=>{
        return axios.get(categoriesUrl)
            .then(({data})=>{
                console.log(data.categories);
                dispatch(setCategories(data.categories.items))
            })
            .catch(err=>console.log(err))
    }
}