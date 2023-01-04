import { getPlayListById, SETPLAYLISTS, SetRandPlayList } from "../constants/actionTypes";

export const setPlayLists=(playlist)=>({
    type: SETPLAYLISTS,
    payload:playlist,
  });

export const setRandPlayList=(playlist)=>({
  type:SetRandPlayList,
  payload:playlist
})
export const setSingleplayList=(playlist)=>({
  type:getPlayListById,  
  payload:playlist
})