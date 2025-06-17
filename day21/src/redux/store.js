import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './reducers/counterReducer';
import authReducer from './reducers/authReducer';
import messageReducer from './reducers/messageReducer';
import themeReducer from './reducers/themeReducer';
import todoReducer from './reducers/todoReducer';
import logger from './middleware/logger';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  message: messageReducer,
  theme: themeReducer,
  todos: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));


export default store;
