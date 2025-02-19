import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weatherData: null,
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherStart: (state) => {
            state.loading = true;
        },
        fetchWeatherSuccess: (state, action) => {
            state.weatherData = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchWeatherFailure: (state, action) => {
            state.error = action.payload; // Store the error message or status
            state.loading = false;
        }
    }
});

export const { fetchWeatherStart, fetchWeatherFailure, fetchWeatherSuccess } = weatherSlice.actions;
export default weatherSlice.reducer;
