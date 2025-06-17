// Task 8: Switch Statement in Reducer
import React from 'react';

const Task8 = () => {
  const reducer = (state = { count: 0 }, action) => {
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
      <h2>Task 8: Switch Statement in Reducer</h2>
      <p>Reducer with a switch block to handle actions.</p>
    </div>
  );
};

export default Task8;
