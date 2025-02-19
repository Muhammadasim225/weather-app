import axios from 'axios';
import { fetchWeatherFailure, fetchWeatherSuccess, fetchWeatherStart } from '../slices/weather';

const fetchWeather = (cityName) => async (dispatch) => {
    if (typeof cityName !== 'string') {
        console.error("cityName is not a string:", cityName);
        return;
    }

    console.log("City Name", cityName);

    if (!cityName.trim()) return;

    try {
        dispatch(fetchWeatherStart());
        const appId = import.meta.env.VITE_APP_ID;
        console.log("The API KEY is", appId);
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`);
        dispatch(fetchWeatherSuccess(response.data)); // Dispatch success action
        console.log(response.data);
    } catch (err) {
        // Instead of storing the whole error object, store only the error message or status code
        dispatch(fetchWeatherFailure(err.message || err.response?.status || 'Unknown error'));
    }
}

export default fetchWeather;
