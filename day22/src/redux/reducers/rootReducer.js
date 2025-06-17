import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import noteReducer from './notesReducer';
import userReducer from './usersReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  notes: noteReducer,
  users: userReducer,
  posts: postReducer
});

export default rootReducer;
