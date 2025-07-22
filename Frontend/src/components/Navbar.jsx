import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('role'); // true if user is logged in

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>📘 EdTech Tracker</h2>

      <div style={styles.menuContainer}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        ) : (
          <>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#004080',
    color: '#fff',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    margin: 0,
    fontSize: '22px',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  logoutBtn: {
    backgroundColor: '#e60000',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Navbar;
