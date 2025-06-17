// Task8.jsx - Multiple Thunks
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

const Task8 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Task 8: Multiple Thunks</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
    </div>
  );
};

export default Task8;