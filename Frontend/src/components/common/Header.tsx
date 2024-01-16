import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logo.png';
import playStoreLogo from '@images/pngwing.com.png';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50  shadow-md">

    <div className="flex justify-between items-center p-4 mr-4">
      <div>
        <Link to="/">
          <img src={logo} alt="Lexidoo Logo" className="h-20" />
        </Link>
      </div>
      <div className="flex items-center">
        <a href="https://play.google.com/store/apps/details?id=com.lexidoo.Lexidoo1" className="mr-4">
          <img src={playStoreLogo} alt="Play Store" className="h-32" />
        </a>
        <Link to="/register" className="btn btn-primary  mr-2">S'inscrire</Link>
        <Link to="/login" className="btn btn-primary">Se connecter</Link>
      </div>
    </div>
  </div>  
  );
};

export default Header;
