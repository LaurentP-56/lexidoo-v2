import React, { useState, useEffect } from 'react';

const MotsListe = ({ level, gratuit }) => {
  const [mots, setMots] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams({ level, gratuit }).toString();
    fetch(`http://127.0.0.1:8000/api/mots/filter?${params}`)
      .then((response) => response.json())
      .then((data) => setMots(data))
      .catch((error) => console.error('Error fetching mots:', error));
  }, [level, gratuit]);

  return (
    <div className="mots-liste-container">
      <h2>Mots à travailler</h2>
      <ul>
        {mots.map((mot) => (
          <li key={mot.id}>
            {mot.nom} - {mot.traduction}
            {/* Autres détails du mot ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotsListe;
