const initialState = {
  loading: false,
  data: '',
  error: null,
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOKE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_JOKE_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_JOKE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default jokeReducer;
