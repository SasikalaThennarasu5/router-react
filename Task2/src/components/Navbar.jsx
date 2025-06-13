import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Shop</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin Panel</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
