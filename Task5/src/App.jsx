import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetailPage from './pages/JobDetailPage';
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    alert('You are now logged in!');
  };

  return (
    <>
      <Navbar />

      {/* Temporary login button for testing */}
      <div style={{ textAlign: 'right', padding: '0.5rem 1rem' }}>
        <button onClick={handleLogin}>Login</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
      </Routes>
    </>
  );
}

export default App;