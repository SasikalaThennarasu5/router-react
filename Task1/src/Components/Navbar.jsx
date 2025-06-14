import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Navbar.css'; 
import { AuthContext } from '../context/AuthContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar">
        <div className="logo ms-5">
          <NavLink to="/" className="logo-text">Sasikala Thennarasu</NavLink>
        </div>

        <ul className="nav-links me-5">
          <li><NavLink exact="true" className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/john/posts">Posts</NavLink></li>
          <li><NavLink className="nav-link" to="/about">About</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
