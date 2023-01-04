import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import playlist from "./playList";
import trukcs from "./trucks";
import catego from "./categories";

export default combineReducers({
    auth , 
    playlist,
    trukcs,
    catego
    
    
});