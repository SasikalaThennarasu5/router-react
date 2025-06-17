import axios from 'axios';

export const fetchWeather = (city) => async dispatch => {
  dispatch({ type: 'FETCH_WEATHER_REQUEST' });
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: err.message });
  }
};
