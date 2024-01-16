import React, { useState, useEffect } from 'react';

// Définir l'interface Tarif
interface Tarif {
    id: number;
    nom_offre: string;
    prix: string;
}

const TarifModification: React.FC = () => {
    const [tarifs, setTarifs] = useState<Tarif[]>([]);
    //const API_BASE_URL = 'http://127.0.0.1:8000/api';

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/tarifs`)
            .then(response => response.json())
            .then(data => setTarifs(data.filter((tarif: Tarif) => tarif.id !== 1))) // Exclure le plan gratuit (id 1)
            .catch(error => console.error('Erreur de chargement', error));
    }, []);

    const handlePriceChange = (id: number, newValue: string) => {
        setTarifs(tarifs.map(tarif => tarif.id === id ? { ...tarif, prix: newValue } : tarif));
    };

    const handleSubmit = (id: number, prix: string) => {
        fetch(`http://127.0.0.1:8000/api/tarifs/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prix })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour');
            }
            return response.json();
        })
        .then(updatedTarif => {
            setTarifs(tarifs.map(tarif => tarif.id === id ? updatedTarif : tarif));
            alert('Tarif mis à jour avec succès');
        })
        .catch(error => console.error('Erreur de mise à jour', error));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tarifs.map((tarif: Tarif) => (
                <div key={tarif.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{tarif.nom_offre}</h5>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={tarif.prix} 
                            onChange={(e) => handlePriceChange(tarif.id, e.target.value)}
                        />
                        <button 
                            className="btn btn-primary mt-2"
                            onClick={() => handleSubmit(tarif.id, tarif.prix)}
                        >
                            Mettre à jour
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TarifModification;
