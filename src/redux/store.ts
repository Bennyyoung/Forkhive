import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type based on the rootReducer

const store = configureStore({
    reducer: rootReducer, // Pass your combined reducer here
  });

export default store;

