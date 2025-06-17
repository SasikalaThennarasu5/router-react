// Task 10: Combine Reducers
import React from 'react';
import { combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    default: return state;
  }
};

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': return [...state, action.payload];
    default: return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer
});

const Task10 = () => {
  return (
    <div>
      <h2>Task 10: Combine Reducers</h2>
      <p>Reducers combined using <code>combineReducers()</code>.</p>
    </div>
  );
};

export default Task10;