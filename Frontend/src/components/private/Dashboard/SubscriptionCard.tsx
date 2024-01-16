// src/components/private/Dashboard/SubscriptionCard.tsx
import React from 'react';

const SubscriptionCard = ({ tarif }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">{tarif.nom_offre}</h3>
      <p className="text-3xl font-bold mb-4 text-indigo-600">€{tarif.prix}</p>
      <p className="mb-6 text-gray-500">{tarif.description}</p>
      {tarif.nom_offre !== 'Gratuit' && (
        <button className="btn btn-primary w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition-colors duration-300">
          Je m'abonne
        </button>
      )}
    </div>
  );
};

export default SubscriptionCard;
