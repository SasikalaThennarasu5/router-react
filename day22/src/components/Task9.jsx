// Task 9: Return Unchanged State
import React from 'react';

const Task9 = () => {
  const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  };

  return (
    <div>
      <h2>Task 9: Return Unchanged State</h2>
      <p>Reducer returns the current state if action type doesn't match.</p>
    </div>
  );
};

export default Task9;
