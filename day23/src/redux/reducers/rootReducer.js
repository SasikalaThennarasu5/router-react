import { combineReducers } from 'redux';
import userReducer from './userReducer';
import quoteReducer from './quoteReducer';
import weatherReducer from './weatherReducer';
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
  users: userReducer,
  quotes: quoteReducer,
  weather: weatherReducer,
  jokes: jokeReducer,
});

export default rootReducer;
