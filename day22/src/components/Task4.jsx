// Task 4: Multiple Actions
import React from 'react';

const Task4 = () => {
  const actions = [
    { type: 'INCREMENT' },
    { type: 'DECREMENT' },
    { type: 'RESET' }
  ];

  return (
    <div>
      <h2>Task 4: Multiple Actions</h2>
      <pre>{JSON.stringify(actions, null, 2)}</pre>
    </div>
  );
};

export default Task4;
