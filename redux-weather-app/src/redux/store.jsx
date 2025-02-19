import { configureStore } from "@reduxjs/toolkit";
// import {thunk } from "redux-thunk";
import weatherReducer from './slices/weather/index'



export const store = configureStore({
    reducer: {
      weather: weatherReducer,
    },
})