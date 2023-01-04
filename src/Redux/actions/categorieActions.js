import { SETCATEGORIES } from "../constants/actionTypes";

export const setCategories=(categories)=>({
    type: SETCATEGORIES,
    payload:categories,
  });