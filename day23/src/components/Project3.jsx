import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherActions';

const Project3 = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);

  const handleSearch = () => dispatch(fetchWeather(city));

  return (
    <div>
      <h2>Project 3: Weather App</h2>
      <input value={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleSearch}>Get Weather</button>
      {weather.loading && <p>Loading...</p>}
      {weather.data && <p>{weather.data.name}: {weather.data.main.temp}°C</p>}
      {weather.error && <p>Error: {weather.error}</p>}
    </div>
  );
};

export default Project3;
