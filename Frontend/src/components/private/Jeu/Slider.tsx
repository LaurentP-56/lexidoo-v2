import React, { useState, useEffect } from 'react';
import './Slider.css';

interface Level {
  id: number;
  label: string;
  subLabel: string;
  classe: string;
}

interface SliderProps {
  onSelect: (niveauChoisi: number) => void;
}

const SliderNiveau: React.FC<SliderProps> = ({ onSelect }) => {
  const [niveaux, setNiveaux] = useState<Level[]>([]);
  const [selectedNiveau, setSelectedNiveau] = useState<number | null>(null);

  useEffect(() => {
    // Remplacez 'http://127.0.0.1:8000/api/levels' par l'URL réelle de votre endpoint
    fetch('http://127.0.0.1:8000/api/levels')
      .then(response => {
        if (!response.ok) {
          throw new Error('Réponse réseau non OK');
        }
        return response.json();
      })
      .then(data => {
        setNiveaux(data);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des niveaux", error);
      });
  }, []);

  const handleNiveauClick = (niveauId: number) => {
    setSelectedNiveau(niveauId);
    onSelect(niveauId);
  };

  return (
    <div className="slider-container">
      <h2>Choisissez votre niveau</h2>
      <p>Vous pouvez le modifier à tout moments'il n'est pas adapté</p>
<div className="niveaux-buttons">
{niveaux.length > 0 ? (
niveaux.map((niveau) => (
<button
  key={niveau.id}
  className={`niveau-button ${selectedNiveau === niveau.id ? 'active' : ''}`}
  onClick={() => handleNiveauClick(niveau.id)}
>
  {niveau.label}
  <div className="sub-label">{niveau.subLabel}</div>
  <div className="classe">{niveau.classe}</div>
</button>

))
) : (
<p>Chargement des niveaux...</p>
)}
</div>
</div>
);
};

export default SliderNiveau;