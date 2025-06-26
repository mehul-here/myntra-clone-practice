import { createSlice, current } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name : 'fetchStatus',
  initialState : {
    fetchDone : false,
    currentlyFetching : false,
  },
  reducers: {
    markFetchDone : (state) => {state.fetchDone=true;},
    markFetchingStarted : (state) => {state.currentlyFetching=true;},
    markFetchingFinished : (state) => {state.currentlyFetching=false;}
  }
})

export default fetchStatusSlice;

export const fetchStatusActions = fetchStatusSlice.actions;