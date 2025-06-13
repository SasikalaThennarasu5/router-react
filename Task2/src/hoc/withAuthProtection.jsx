import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const withAuthProtection = (Component) => {
  return (props) =>
    isAuthenticated() ? <Component {...props} /> : <Navigate to="/" />;
};

export default withAuthProtection;
