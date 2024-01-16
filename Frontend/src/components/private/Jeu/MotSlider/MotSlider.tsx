// src/components/private/Jeu/MotSlider/MotSlider.tsx
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../../config'; // Assurez-vous que le chemin est correct pour l'importation

interface Mot {
  id: number;
  nom: string;
  // Ajoutez ici d'autres propriétés des mots si nécessaire
}

interface MotsSliderProps {
  niveau: number | null;
  // Supposons que vous avez des endpoints pour filtrer par themeId et sousThemeId
}

const MotsSlider: React.FC<MotsSliderProps> = ({ niveau }) => {
  const [mots, setMots] = useState<Mot[]>([]);
  const [currentMot, setCurrentMot] = useState<number>(0);
  const [reponse, setReponse] = useState<string>('');

  useEffect(() => {
    async function fetchMots() {
      if (niveau) {
        const queryParams = new URLSearchParams({
          level: niveau.toString(),
          // Ajoutez d'autres paramètres de filtrage si nécessaire
        });

        try {
          const response = await fetch(`${API_BASE_URL}/mots?${queryParams}`);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const data: Mot[] = await response.json();
          setMots(data);
        } catch (error) {
          console.error('Erreur lors de la récupération des mots:', error);
        }
      }
    }

    fetchMots();
  }, [niveau]); // Ajoutez d'autres dépendances si nécessaire

  const handleMotSelection = (index: number) => {
    setCurrentMot(index);
  };

  const handleSubmit = async () => {
    console.log(`Réponse soumise pour le mot ${mots[currentMot].nom}: ${reponse}`);
    // Effacer la réponse après soumission
    setReponse('');
    // Implémentez la logique de soumission de la réponse à votre API ici si nécessaire
  };

  return (
    <div className="mots-slider">
      <h2>Mots à pratiquer</h2>
      {mots.length > 0 ? (
        <div>
          <ul>
            {mots.map((mot, index) => (
              <li key={mot.id} onClick={() => handleMotSelection(index)}>
                {mot.nom}
              </li>
            ))}
          </ul>
          <div>
            <h3>Réponse pour : {mots[currentMot]?.nom}</h3>
            <input
              type="text"
              value={reponse}
              placeholder="Tapez votre réponse ici"
              onChange={(e) => setReponse(e.target.value)}
            />
            <button onClick={handleSubmit}>
              Soumettre
            </button>
          </div>
        </div>
      ) : (
        <p>Chargement des mots...</p>
      )}
    </div>
  );
};

export default MotsSlider;
