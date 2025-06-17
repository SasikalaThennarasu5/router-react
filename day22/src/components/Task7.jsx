// Task 7: Initial State in Reducer
import React from 'react';

const Task7 = () => {
  const initialState = { count: 0 };
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  return (
    <div>
      <h2>Task 7: Initial State in Reducer</h2>
      <pre>{JSON.stringify(initialState, null, 2)}</pre>
    </div>
  );
};

export default Task7;