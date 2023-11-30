// Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the stylesheet

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather Forecast</h2>
      <div className="input-container">
        <label className="input-label">
          Enter City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field"
          />
        </label>
        <button onClick={fetchWeather} className="fetch-button">
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <h3 className="city-name">Weather in {weatherData.name}</h3>
          <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
          <p className="weather-description">
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
