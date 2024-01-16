import React, { useState } from 'react';
import './ChooseLevelPage.css'; // Assurez-vous d'avoir ce fichier CSS

const ChooseLevelPage = () => {
    // Logique pour gérer les niveaux
    const [level, setLevel] = useState(null);

    // Fonctions pour gérer la sélection des niveaux
    const handleLevelSelect = (selectedLevel) => {
        setLevel(selectedLevel);
        // Autres logiques comme la navigation vers une autre page ou le stockage des données
    };

    // Similaire pour la durée, les thèmes, etc.

    return (
        <div className="container-fluid" style={{ paddingTop: '32px' }}>
            {/* Choix du niveau */}
            <div className="step-choice">
                <button type="button" className="btn btn-primary" onClick={() => handleLevelSelect(1)}>
                    <span>Débutante</span> <br />
                    A1 - A2 <br /> <br />
                    6ème - 5ème
                </button>
                {/* Autres boutons pour les différents niveaux */}
            </div>

            {/* Autres étapes similaires pour la durée, les thèmes, etc. */}

            {/* Gestion des choix de thèmes, catégories, etc. */}
            {/* Vous pouvez ajouter ici des composants ou des div pour les différentes étapes */}
        </div>
    );
};

export default ChooseLevelPage;
