import React from 'react';

const withPermissions = (WrappedComponent, requiredPermission) => {
  return (props) => {
    const permissions = JSON.parse(localStorage.getItem('permissions')) || [];

    if (permissions.includes(requiredPermission)) {
      return <WrappedComponent {...props} />;
    } else {
      return <div style={{ padding: '2rem', color: 'red' }}>Access Denied</div>;
    }
  };
};

export default withPermissions;