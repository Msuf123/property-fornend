import { configureStore } from '@reduxjs/toolkit';
import PropertySlcie from '../slices/PropertySlice/PropertySlcie';
import loggedIn from '../slices/LogedInSlice/loadingSlice';

export const store = configureStore({
  reducer: {
    properties:PropertySlcie,loggedInStatus:loggedIn
  },
});