// src/components/private/Dashboard/SubscriptionCard.tsx
import React from 'react';

const TarifCard = ({ tarif }) => {
  return (
    <div className="card bg-gray-light rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">{tarif.nom_offre}</h3>
      <p className="text-3xl font-bold mb-4 text-indigo-600">€{tarif.prix}</p>
      <p className="mb-6 text-gray-500">{tarif.description}</p>
     
    </div>
  );
};

export default TarifCard;