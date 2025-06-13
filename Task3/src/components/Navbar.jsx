import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/courses">Courses</Link>
  </nav>
);

export default Navbar;