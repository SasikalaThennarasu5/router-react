import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#eee' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/leads" style={{ marginRight: '1rem' }}>Leads</Link>
    <Link to="/deals" style={{ marginRight: '1rem' }}>Deals</Link>
    <Link to="/contacts" style={{ marginRight: '1rem' }}>Contacts</Link>
    <Link to="/settings">Settings</Link>
  </nav>
);

export default Navbar;