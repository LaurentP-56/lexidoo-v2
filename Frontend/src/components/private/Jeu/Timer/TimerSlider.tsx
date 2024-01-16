import React, { useState } from 'react';
import './TimerSlider.css'; // Assurez-vous de créer un fichier CSS pour les styles

const tempsOptions = [
  { id: 1, duree: '3 Minutes', description: '3 minutes par jour, c’est mieux que pas du tout !' },
  { id: 2, duree: '6 Minutes', description: 'Vous mémoriserez plus de 5000 mots en un an, pas mal !' },
  { id: 3, duree: '10 Minutes', description: 'Pour les accros !' },
];


interface TimerSliderProps {
  onSelect: (tempsChoisi: string) => void;
}
const TimerSlider: React.FC<TimerSliderProps> = ({ onSelect }) => {
  const [selectedTime, setSelectedTime] = useState(tempsOptions[0].id);

  return (
    <div className="timer-slider-container">
      <h2>Choix du temps de travail pour vous</h2>
      <div className="temps-buttons">
        {tempsOptions.map((option) => (
          <button
            key={option.id}
            className={`temps-button ${selectedTime === option.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedTime(option.id);
              onSelect(option.duree); // Utilisez onSelect ici pour déclencher l'événement
            }}
          >
            {option.duree}
            <div className="temps-description">{option.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimerSlider;