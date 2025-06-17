// Task 3: Action with Payload
import React from 'react';

const Task3 = () => {
  const addUserAction = {
    type: 'ADD_USER',
    payload: {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    }
  };

  return (
    <div>
      <h2>Task 3: Action with Payload</h2>
      <pre>{JSON.stringify(addUserAction, null, 2)}</pre>
    </div>
  );
};

export default Task3;
