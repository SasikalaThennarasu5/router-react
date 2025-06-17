// Task 5: Action Creators
import React from 'react';

const Task5 = () => {
  const increment = () => ({ type: 'INCREMENT' });
  const addUser = (user) => ({ type: 'ADD_USER', payload: user });

  return (
    <div>
      <h2>Task 5: Action Creators</h2>
      <pre>{JSON.stringify(increment(), null, 2)}</pre>
      <pre>{JSON.stringify(addUser({ id: 2, name: 'Bob' }), null, 2)}</pre>
    </div>
  );
};

export default Task5;