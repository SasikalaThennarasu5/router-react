import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncActionExample } from '../redux/actions/asyncActions'; // make sure this action exists

const Task4 = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(asyncActionExample());
  };

  return (
    <div>
      <h3>Task 4: Thunk Async Action Example</h3>
      <button onClick={handleClick}>Trigger Async Action</button>
    </div>
  );
};

export default Task4;
