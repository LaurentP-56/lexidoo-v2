import React, { useState, useEffect } from 'react';
import '../Slider.css';

interface Theme {
  id: number;
  name: string;
  theme_id: number;
}

interface ThemesSliderProps {
  onSelect: (themeId: number) => void;
}

const ThemesSlider: React.FC<ThemesSliderProps> = ({ onSelect }) => {
  const [themes, setThemes] = useState<Theme[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/themes')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main_themes) {
          setThemes(data.main_themes); // Utiliser seulement main_themes
        } else {
          console.error('Structure de données inattendue:', data);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des thèmes:', error));
  }, []);

  const handleThemeClick = (themeId: number) => {
    onSelect(themeId);
  };

  return (
    <div className="themes-slider-container">
      <h2>Que voulez-vous travailler aujourd'hui ?</h2>
      {themes.map((theme) => (
        <button key={theme.id} className="niveau-button" onClick={() => handleThemeClick(theme.theme_id)}>
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemesSlider;
