const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'REGISTER_USER': return [...state, action.payload];
    case 'REMOVE_USER': return state.filter(user => user.email !== action.payload);
    default: return state;
  }
};