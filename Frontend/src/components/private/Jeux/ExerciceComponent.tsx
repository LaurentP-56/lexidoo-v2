import React, { useState, useEffect } from 'react';

// Assurez-vous que API_BASE_URL est correctement défini dans votre configuration
import { API_BASE_URL } from '@src/config';

const ExerciceComponent = () => {
    // State pour stocker le niveau sélectionné
    const [level, setLevel] = useState(null);

    // State pour stocker la liste des thèmes
    const [themes, setThemes] = useState([]);

    // Charger les thèmes depuis l'API au montage du composant
    useEffect(() => {
        fetch(`${API_BASE_URL}/themes`)
            .then(response => {
                // Vérifier si la réponse est ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setThemes(data);
            })
            .catch(error => {
                console.error('Error fetching themes:', error);
            });
    }, []);

    // Gérer la sélection d'un niveau
    const handleLevelSelect = (selectedLevel) => {
        setLevel(selectedLevel);
        // Vous pouvez implémenter ici d'autres logiques comme la redirection ou l'affichage de détails supplémentaires
        console.log(`Niveau sélectionné : ${selectedLevel}`);
    };

    return (
        <div className="col-md-12 text-center">
            <h1>Choisissez un Thème</h1>
            {themes.length > 0 ? (
                themes.map(theme => (
                    <button key={theme.id} onClick={() => handleLevelSelect(theme.id)} className="btn btn-primary m-2">
                        {theme.name}
                    </button>
                ))
            ) : (
                <p>Chargement des thèmes...</p>
            )}
        </div>
    );
};

export default ExerciceComponent;
