// Task 6: Reducer Implementation
import React from 'react';

const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + 1;
  if (action.type === 'DECREMENT') return state - 1;
  return state;
};

const Task6 = () => {
  return (
    <div>
      <h2>Task 6: Reducer Implementation</h2>
      <p>Reducer function defined to handle INCREMENT and DECREMENT actions.</p>
    </div>
  );
};

export default Task6;