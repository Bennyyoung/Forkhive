import { configureStore, Store, Action, Reducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import rootReducer from './reducers';
import { SetDarkModeAction } from './actionTypes';

// Define your RootState and Action Types
export type RootType = ReturnType<typeof rootReducer>
export type RootAction = SetDarkModeAction

// Configuration for Redux persist
const persistConfig = {
  key: 'root', // This would be the key in the local storage
  storage
}

// Create a persisted reducer using the persisted reducer function
const persistedReducer = persistReducer<RootState, RootAction>(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type based on the rootReducer

export const store = configureStore({
  reducer: persistedReducer, // Pass your combined reducer here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});
// @ts-ignore
export const persistor = persistStore(store)

