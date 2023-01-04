import { SETRECENTLYPLAYED } from "../constants/actionTypes";


export const setRecentlyPlayed=(recentlyPlayed)=>({
    type: SETRECENTLYPLAYED,
    payload:recentlyPlayed,
  });