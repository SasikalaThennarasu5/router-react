import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userActions';

const Project2 = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Project 2: User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Project2;
