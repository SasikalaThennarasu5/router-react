import { createStore, combineReducers } from 'redux';
import { counterReducer, notesReducer, usersReducer, cartReducer, reactionsReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
  users: usersReducer,
  cart: cartReducer,
  reactions: reactionsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;