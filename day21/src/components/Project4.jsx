import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/authActions';

const Project4_AuthApp = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Auth App</h2>
      {isAuthenticated ? (
        <>
          <p>Welcome, User!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default Project4_AuthApp;
