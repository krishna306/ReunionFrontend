import { configureStore } from '@reduxjs/toolkit'
import propertySlice from './features/propertySlice'
import appApi from "./services/appApi.js";
import storage from 'redux-persist/lib/storage'; 
import {combineReducers} from 'redux';
import thunk from "redux-thunk";
import {persistReducer} from "redux-persist"
// import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig ={
  key:'root',
  storage,
  blacklist : [appApi.reducerPath]
}
const reducers = combineReducers({
      property : propertySlice,
      [appApi.reducerPath]: appApi.reducer,
})
const persistedReducer = persistReducer(persistConfig,reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware : [thunk,appApi.middleware],
})



export default store;