// --- redux/reducers/postReducer.js ---
const postInitialState = { likes: 0, dislikes: 0 };
const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case 'LIKE':
      return { ...state, likes: state.likes + 1 };
    case 'DISLIKE':
      return { ...state, dislikes: state.dislikes + 1 };
    default:
      return state;
  }
};
export default postReducer;
