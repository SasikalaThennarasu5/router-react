import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ Fix is here

import quoteReducer from './reducers/quoteReducer';
import userReducer from './reducers/userReducer';
import postReducer from './reducers/postReducer';
import weatherReducer from './reducers/weatherReducer';
import jokeReducer from './reducers/jokeReducer';

// Optional: custom logger middleware
const logger = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  return result;
};

const rootReducer = combineReducers({
  quote: quoteReducer,
  users: userReducer,
  posts: postReducer,
  weather: weatherReducer,
  joke: jokeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
