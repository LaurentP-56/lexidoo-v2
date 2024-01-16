// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logo.png';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <img src={logo} alt="Lexidoo Logo" style={{ height: '80px' }} />
      <div>
        <Link to="/login" className="btn btn-primary" style={{ marginRight: '1rem' }}>Se connecter</Link>
        <Link to="/register" className="btn btn-primary">S'inscrire</Link>
      </div>
    </header>
  );
};

export default Header;
