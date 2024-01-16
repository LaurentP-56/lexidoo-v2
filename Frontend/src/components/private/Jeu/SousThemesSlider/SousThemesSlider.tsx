import React, { useState, useEffect } from 'react';
import '../Slider.css';

interface SousTheme {
  id: number;
  name: string;
}

interface SousThemesSliderProps {
  themeId: number;
  onSelect: (sousThemeId: number) => void;
}

const SousThemesSlider: React.FC<SousThemesSliderProps> = ({ themeId, onSelect }) => {
  const [sousThemes, setSousThemes] = useState<SousTheme[]>([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/themes/${themeId}/sous-themes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Réponse réseau non OK');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSousThemes(data);
        } else {
          console.error('Les données reçues ne sont pas un tableau:', data);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des sous-thèmes:', error));
  }, [themeId]);

  const handleClick = (id: number) => {
    onSelect(id);
  };

  return (
    <div className="sous-themes-slider-container">
      <h2>Sous-thèmes disponibles :</h2>
      {sousThemes.map((sousTheme) => (
        <div key={sousTheme.id} className=" h-20 flex items-center justify-center">
          <a href="#_" className="relative inline-block px-4 py-2 font-medium group" onClick={() => handleClick(sousTheme.id)}>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">{sousTheme.name}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SousThemesSlider;
