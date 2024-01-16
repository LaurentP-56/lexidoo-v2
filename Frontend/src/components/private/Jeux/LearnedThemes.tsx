// LearnedThemes.tsx
import React from 'react';

const ChoixSousTheme = ({ themes, onSelectTheme }) => {
    return (
        <div>
            <h1>Choisissez le sous-thème</h1>
            {themes.map(theme => (
                <button key={theme.id} onClick={() => onSelectTheme(theme.id)}>
                    {theme.name}
                </button>
            ))}
        </div>
    );
};

export default ChoixSousTheme;
