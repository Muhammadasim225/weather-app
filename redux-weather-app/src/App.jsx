import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchWeather from './redux/actions';
import { useEffect } from 'react';

function App() {
  const [cityName, setCityName] = useState("");
  const { weatherData, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const fetchWeather123 = (cityName) => {
    console.log("This is cityName variable", cityName);
    if (cityName.trim()) {
      dispatch(fetchWeather(cityName));
    }
  };

  const handleChangeOfCity = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      <div className="search-container">
        <input
          type="search"
          name="searchBar"
          id="search-bar"
          value={cityName}
          onChange={handleChangeOfCity}
          className="search-bar"
          placeholder="Enter city name"
        />
        <button
          onClick={() => fetchWeather123(cityName)}
          className="search-button"
        >
          Search City
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2 className="city-name">{weatherData.name}</h2>
          <h4 className="country">{weatherData.sys.country}</h4>
          <p className="weather-description">
            {weatherData.weather[0].description}
          </p>
          <p className="weather-main">{weatherData.weather[0].main}</p>
          <p className="temperature">
            <strong>Temperature: </strong>
            {(weatherData.main.temp - 273.15).toFixed(2)} °C
          </p>
          <p className="feels-like">
            <strong>Feels Like: </strong>
            {(weatherData.main.feels_like - 273.15).toFixed(2)} °C
          </p>
          <p className="humidity">
            <strong>Humidity: </strong>
            {weatherData.main.humidity} %
          </p>
          <p className="pressure">
            <strong>Pressure: </strong>
            {weatherData.main.pressure} hPa
          </p>
          <p className="wind-speed">
            <strong>Wind Speed: </strong>
            {weatherData.wind.speed} m/s
          </p>
          <p className="wind-gusts">
            <strong>Wind Gusts: </strong>
            {weatherData.wind.gust} m/s
          </p>
          <p className="visibility">
            <strong>Visibility: </strong>
            {weatherData.visibility / 1000} km
          </p>
          <p className="sunrise">
            <strong>Sunrise: </strong>
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p className="sunset">
            <strong>Sunset: </strong>
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
