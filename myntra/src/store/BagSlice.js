import {createSlice} from "@reduxjs/toolkit"

const bagSlice =createSlice({
  name:"bag",
  initialState: ["001"],
  reducers : {
    addToBag : (state,action) =>{
      if (!state.includes(action.payload)) {
  state.push(action.payload);
}
    },
    removeFromBag : (state,action) =>{
      return state = state.filter(item => item !== action.payload);
    }
  }
})

export default bagSlice;
export const bagAction = bagSlice.actions;