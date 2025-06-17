// Task 12: Immutable State Update
import React from 'react';

const Task12 = () => {
  const reducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload]; // Immutable update
      default:
        return state;
    }
  };

  return (
    <div>
      <h2>Task 12: Immutable State Update</h2>
      <p>State is updated immutably using spread operator.</p>
    </div>
  );
};

export default Task12;