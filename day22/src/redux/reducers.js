const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE':
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return [...state, action.payload];
    case 'REMOVE_USER':
      return state.filter(user => user.email !== action.payload);
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

const reactionsReducer = (state = { likes: 0, dislikes: 0 }, action) => {
  switch (action.type) {
    case 'LIKE':
      return { ...state, likes: state.likes + 1 };
    case 'DISLIKE':
      return { ...state, dislikes: state.dislikes + 1 };
    default:
      return state;
  }
};

export {
  counterReducer,
  notesReducer,
  usersReducer,
  cartReducer,
  reactionsReducer,
};