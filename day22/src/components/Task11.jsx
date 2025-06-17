// Task 11: Dispatch Actions with Payload
import React from 'react';
import { useDispatch } from 'react-redux';

const Task11 = () => {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch({
      type: 'ADD_USER',
      payload: { id: 3, name: 'Charlie' }
    });
  };

  return (
    <div>
      <h2>Task 11: Dispatch Actions with Payload</h2>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Task11;