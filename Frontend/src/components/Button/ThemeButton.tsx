import React from 'react';
import PropTypes from 'prop-types';
import './ThemeButton.css'; // Assurez-vous d'inclure votre CSS ici

const ThemeButton = ({ themeName, onClick }) => {
  return (
    <button className="custom-btn btn-12" onClick={() => onClick(themeName)}>
      
      <span>Allons-y</span>
      <span>{themeName}</span>
    </button>
  );
};

ThemeButton.propTypes = {
  themeName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ThemeButton;
