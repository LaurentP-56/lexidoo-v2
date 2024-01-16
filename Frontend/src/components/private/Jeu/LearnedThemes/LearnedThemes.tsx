import React, { useState, useEffect } from 'react';
import './LearnedThemes.module.css';
const ThemesSlider = () => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/themes')
      .then((response) => response.json())
      .then((data) => setThemes(data))
      .catch((error) => console.error('Error fetching themes:', error));
  }, []);

  return (
    <div className="themes-slider-container">
      <h2>Que voulez vous travailler aujourd'hui</h2>
      {themes.map((theme) => (
        <button key={theme.id} className="theme-button">
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemesSlider;
