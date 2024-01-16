import React, { useState, useEffect } from 'react';
import SubscriptionCard from './SubscriptionCard';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import { API_BASE_URL } from '@src/config';

const fetchJSON = async (url, token) => {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorInfo = await response.json();
    throw new Error(`Error: ${response.status} - ${errorInfo.message}`);
  }

  return response.json();
};

const PremiumMembership = ({ finDuPremium, nomOffrePremium }) => {
  return (
    <div>
      <h2>Abonnement Premium</h2>
      <p>Type d'offre: {nomOffrePremium}</p>
      <p>Fin de l'abonnement: {finDuPremium}</p>
    </div>
  );
};
const formatDate = (dateString) => {
  if (!dateString) {
    return 'Pas de date de fin'; // ou 'Infini' ou tout autre texte que vous préférez
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};
const Souscription = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [finDuPremium, setFinDuPremium] = useState('');
  const [nomOffrePremium, setNomOffrePremium] = useState('');
  const [tarifs, setTarifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const subscriptionDetails = await fetchJSON(`${API_BASE_URL}/subscription-details`, token);
        if (subscriptionDetails) {
          setIsPremium(subscriptionDetails.isPremium);
          setFinDuPremium(subscriptionDetails.finDuPremium);
          setNomOffrePremium(subscriptionDetails.nomOffrePremium);
        } else {
          throw new Error('Invalid response data');
        }

        const tariffsData = await fetchJSON(`${API_BASE_URL}/tarifs`, token);
        setTarifs(tariffsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="flex-grow p-4">
      {isPremium ? (
        <PremiumMembership 
          finDuPremium={formatDate(finDuPremium)} 
          nomOffrePremium={nomOffrePremium}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {tarifs.map((tarif) => (
            <SubscriptionCard key={tarifs.id} tarif={tarifs} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Souscription;
