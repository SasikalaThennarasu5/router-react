const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': return [...state, action.payload];
    case 'DELETE_NOTE': return state.filter((_, i) => i !== action.payload);
    default: return state;
  }
};