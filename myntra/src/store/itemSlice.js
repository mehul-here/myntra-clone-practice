import {createSlice} from "@reduxjs/toolkit"
import DEFAULT_ITEMS from "../data/items";

const itemSlice =createSlice({
  name:"items",
  initialState: [],
  reducers : {
    addInitialItems : (store,action) =>{
      return action.payload;
    }
  }
})

export default itemSlice;
export const itemsAction = itemSlice.actions;