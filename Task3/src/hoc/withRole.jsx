import React from 'react';

const withRole = (WrappedComponent, allowedRole) => {
  return (props) => {
    const role = localStorage.getItem('userRole'); // "student" or "instructor"

    if (role === allowedRole) {
      return <WrappedComponent {...props} />;
    } else {
      return <div style={{ padding: '2rem', color: 'red' }}>Access Denied</div>;
    }
  };
};

export default withRole;