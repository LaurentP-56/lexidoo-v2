// ChoixDuree.tsx
import React from 'react';
import '@button/ThemeButton.css';

import NiveauSelection from './NiveauSelection';

const ChoixDuree = () => {
    const yourOnSelectLevelFunction = (selectedLevel) => {
        // Ajoutez votre logique de gestion du niveau ici
        console.log(`Niveau sélectionné : ${selectedLevel}`);
    };

    const onDurationSelect = (selectedDuration) => {
        // Ajoutez votre logique de gestion de la durée ici
        console.log(`Durée sélectionnée : ${selectedDuration} minutes`);
    };

    return (
        <div className="col-md-12 carousel-item">
            <div className="step-title" style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h1>Choix du temps de travail pour vous</h1>
            </div>

            {/* Utilisez le composant NiveauSelection avec onSelectLevel défini */}
            <NiveauSelection onSelectLevel={yourOnSelectLevelFunction} />

            {/* Autres éléments du composant */}
            {/* Utilisez le composant DurationChoice pour chaque option */}
            <DurationChoice duration={3} onSelect={onDurationSelect} />
            <DurationChoice duration={6} onSelect={onDurationSelect} />
            <DurationChoice duration={10} onSelect={onDurationSelect} />
        </div>
    );
};

export default ChoixDuree;
