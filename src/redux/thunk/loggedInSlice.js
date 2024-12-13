import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkLoggedInStatus = createAsyncThunk(
  'loggedInStatus/checkLoggedInStatus',
  async (arg, { rejectWithValue }) => {
    try {
      const token=localStorage.getItem('token')
      if(token===null){
        throw new Error("no tokne")
      }
      const response = await fetch('http://localhost:5000/signUp/isLoggedIN', { method: 'GET',headers:{'Authorization': 'Bearer '+token} });
     
      
    
    
      const data =await response.text()
      
      if(data=='unauth'){
        throw new Error("no auth")
      }
      else{
        console.log('data is ther he si logge din',data)
        return  JSON.parse(data)
      }
        
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.message);  // Return error message if something goes wrong
    }
  }
);