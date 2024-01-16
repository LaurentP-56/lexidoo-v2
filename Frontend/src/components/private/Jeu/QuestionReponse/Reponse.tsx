import React, { useState } from 'react';

const CardMot = ({ mot }) => {
  const [connaissance, setConnaissance] = useState(null);

  const jouerAudio = () => {
    new Audio(mot.audio).play();
  };
  const handleResponse = (knewIt) => {
    const probability = knewIt ? mot.probability_of_appearance - 20 : 90;
    fetch(`http://127.0.0.1:8000/api/mots/${mot.id}/update-probability`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ probability_of_appearance: probability }),
    })
    .then(response => response.json())
    .then(updatedMot => {
      console.log('Probabilité mise à jour:', updatedMot);
      // Vous pouvez également mettre à jour l'état ici si nécessaire
    })
    .catch(error => console.error('Erreur lors de la mise à jour de la probabilité', error));
  };


  return (
    <div className="card-mot-container">
      <div className="mot-original">{mot.nom}</div>
      <div className="mot-traduction">{mot.traduction}</div>
      
      <button className="bouton-audio" onClick={jouerAudio}>
        <span role="img" aria-label="play">▶️</span>
      </button>

      <div className="boutons-reponse">
        <button
          className={`bouton ${connaissance === 'savais' ? 'active' : ''}`}
          onClick={() => setConnaissance('savais')}
        >
          Je le savais
        </button>
        <button
          className={`bouton ${connaissance === 'savaisPas' ? 'active' : ''}`}
          onClick={() => setConnaissance('savaisPas')}
        >
          Je ne savais pas
        </button>
        <button
          className={`bouton ${connaissance === 'veuxPas' ? 'active' : ''}`}
          onClick={() => setConnaissance('veuxPas')}
        >
          Je ne veux pas apprendre ce mot
        </button>
      </div>
      
      {connaissance === 'savaisPas' && (
        <div className="hint">
          En cas d'hésitation, choisissez « Je ne savais pas » pour que le mot revienne.
        </div>
      )}
    </div>
  );
};

export default CardMot;
