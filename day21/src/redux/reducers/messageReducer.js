// --- redux/reducers/messageReducer.js ---
const initialMessageState = { message: 'Hello Redux!' };
const messageReducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
export default messageReducer;