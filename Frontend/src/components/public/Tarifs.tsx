import React, { useState, useEffect } from 'react';
import TarifCard from './TarifCard'; // Ajustez le chemin d'importation si nécessaire
import Loader from '../private/Dashboard/Loader';
// Importez ErrorNotification si nécessaire
// import ErrorNotification from './ErrorNotification';
import { API_BASE_URL } from '@src/config';

// Fonction pour récupérer les données JSON
const fetchJSON = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const errorInfo = await response.json();
    throw new Error(`Error: ${response.status} - ${errorInfo.message}`);
  }

  return response.json();
};

// Composant TarifPub
const TarifPub = () => {
  const [tarifs, setTarifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Récupérer les données tarifs lors du montage du composant
  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        setLoading(true);

        const tarifsData = await fetchJSON(`${API_BASE_URL}/tarifs`);
        setTarifs(tarifsData);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTarifs();
  }, []);

  // Rendre les composants de chargement ou d'erreur en fonction de l'état
  if (loading) return <Loader />;
  if (error) return <ErrorNotification message={error} />;

  // Rendre le contenu principal avec les composants TarifCard
  return (
    <div className="flex-grow p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Formules d'abonnement</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {tarifs.map((tarif) => (
            <TarifCard key={tarif.id} tarif={tarif} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarifPub;
