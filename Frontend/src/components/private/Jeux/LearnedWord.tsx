// LearnedWord.tsx
import React from 'react';

const AffichageMot = ({ mot }) => {
    return (
        <div>
            <h1>Mot à afficher</h1>
            <p>{mot}</p>
        </div>
    );
};

export default AffichageMot;
