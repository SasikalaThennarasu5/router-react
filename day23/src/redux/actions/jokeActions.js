import axios from 'axios';

export const fetchJoke = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_JOKE_REQUEST' });

    try {
      const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
      dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: `${res.data.setup} ${res.data.punchline}` });
    } catch (error) {
      dispatch({ type: 'FETCH_JOKE_FAILURE', payload: error.message });
    }
  };
};
