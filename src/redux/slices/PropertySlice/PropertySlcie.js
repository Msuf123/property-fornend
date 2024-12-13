import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  properties: [
    { id: 1, name: 'Luxury Villa', price: '$500,000', location: 'New York' },
    { id: 2, name: 'Cozy Apartment', price: '$200,000', location: 'Los Angeles' },
    { id: 3, name: 'Modern House', price: '$350,000', location: 'San Francisco' },
    { id: 4, name: 'Beachfront Condo', price: '$650,000', location: 'Miami' },
    { id: 5, name: 'Mountain Cabin', price: '$400,000', location: 'Denver' }
  ],
  loading: true,
  error: null,
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});


export const { setProperties, setLoading, setError } = propertiesSlice.actions;

export const selectProperties = (state) => state.properties.properties;
export const propertyloading=(state)=>state.properties.loading
export default propertiesSlice.reducer;
