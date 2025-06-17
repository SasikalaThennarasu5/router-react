// Mini Project 3: User Registration
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Project3 = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const registerUser = () => {
    dispatch({ type: 'REGISTER_USER', payload: user });
    setUser({ name: '', email: '' });
  };

  const removeUser = (email) => {
    dispatch({ type: 'REMOVE_USER', payload: email });
  };

  return (
    <div>
      <h2>Mini Project 3: User Registration</h2>
      <input placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <button onClick={registerUser}>Register</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} ({u.email}) <button onClick={() => removeUser(u.email)}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Project3;