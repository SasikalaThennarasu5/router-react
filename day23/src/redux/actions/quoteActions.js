import axios from 'axios';

export const fetchQuote = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_QUOTE_REQUEST' });

    try {
      const response = await axios.get('https://api.quotable.io/random');
      dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: [response.data] });
    } catch (error) {
      dispatch({ type: 'FETCH_QUOTE_FAILURE', payload: error.message });
    }
  };
};
