const initialState = {
  loading: false,
  data: [],
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_QUOTE_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_QUOTE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
