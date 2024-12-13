import { createSlice } from '@reduxjs/toolkit';
import { checkLoggedInStatus } from '../../thunk/loggedInSlice';


const initialState = {
  
  loading: true,
  loggedIn:false,
  data:{}
};

const loggedInStatusSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {}
  ,extraReducers: (builder) => {
    builder
      // Handle the loading state when the async thunk is triggered
      .addCase(checkLoggedInStatus.pending, (state) => {
        state.loading = true;
      })
      // Handle success when the user is logged in
      .addCase(checkLoggedInStatus.fulfilled, (state, action) => {
     
        state.loading = false;
        state.loggedIn = true;
        state.data = action.payload;  // Assuming the API returns user data
      })
      // Handle error if the user is not logged in or an error occurred
      .addCase(checkLoggedInStatus.rejected, (state, action) => {
        
        state.loading = false;
        state.loggedIn = false;
        state.data = {};  // Clear user data if not logged in or error occurred
      });
  }
});

export const loggedInStatus=(state)=>state.loggedInStatus.loggedIn
export const loggedInLoading=(state)=>state.loggedInStatus.loading
export default loggedInStatusSlice.reducer

