// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem' }}>
      <Link to="/cgu">CONDITIONS GENERALES D’ABONNEMENT ET D’UTILISATION</Link>
    </footer>
  );
};

export default Footer;
