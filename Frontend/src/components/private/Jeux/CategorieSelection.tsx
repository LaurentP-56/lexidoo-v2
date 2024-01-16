import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@src/config';

const CategorieSelection = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Erreur:', error));
    }, []);

    return (
        <div className="step-choice">
            {categories.map(categorie => (
                <button key={categorie.id} onClick={() => onSelectCategory(categorie.nom)}>
                    {categorie.nom}
                </button>
            ))}
        </div>
    );
};

export default CategorieSelection;
