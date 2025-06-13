import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h3>Login</h3>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default LoginModal;