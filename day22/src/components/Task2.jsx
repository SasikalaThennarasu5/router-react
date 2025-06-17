// Task 2: Basic Action Creation
import React from 'react';

const Task2 = () => {
  const incrementAction = { type: 'INCREMENT' };

  return (
    <div>
      <h2>Task 2: Basic Action Creation</h2>
      <pre>{JSON.stringify(incrementAction, null, 2)}</pre>
    </div>
  );
};

export default Task2;