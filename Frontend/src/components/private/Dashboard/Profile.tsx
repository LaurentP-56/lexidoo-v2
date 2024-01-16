import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@src/config';
import './Profil.css';

const DefaultAvatar = ({ nom, prenom }) => {
    const getInitials = (name) => {
        return name && name.length > 0 ? name.charAt(0).toUpperCase() : '';
    };

    const initials = `${getInitials(nom)}${getInitials(prenom)}`;

    return (
        <div style={{ backgroundColor: '#012169', color: '#C8102E', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {initials}
        </div>
    );
};


const Profile = () => {
    const [user, setUser] = useState({
        // Assurez-vous que toutes ces valeurs initiales ne sont pas null
        image: '',
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        adresse: '',
        ville: '',
        pays: '',
        premium: false,
        offre_premium: '',
        creationDuCompte: '',
        finDuPremium: '',
        created_at: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
    console.log('Stored Token:', token);
        fetch(`${API_BASE_URL}/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Profile Data:', data);
            setUser(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('API Error:', error);
            setError(error.message);
            setLoading(false);
        });
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value || '' })); // Ajoutez '' pour éviter null
    };


    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPhoto(event.target.files[0]);
        }
    };

    const handleRenewPremium = async () => {
        window.location.href = '/renew-subscription';
    };

    const formatDate = (dateString) => {
        if (!dateString) {
          return 'Pas de date de fin'; // ou 'Infini' ou tout autre texte que vous préférez
        }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
      };
    const handleProfileUpdate = async (event) => {
        event.preventDefault();
    
        const token = localStorage.getItem('token');
        const formData = new FormData();
        if (photo) {
            formData.append('photo', photo);
        }
    
        Object.keys(user).forEach(key => {
            formData.append(key, user[key]);
        });
    
        try {
            const response = await fetch(`${API_BASE_URL}/profile`, {  // Utilisation de backticks
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Error while updating profile');
            }
    
            const updatedUser = await response.json();
            setUser(updatedUser);
            setPhoto(null);
        } catch (e) {
            console.error('API Error:', e);
    
            if (e.response) {
                // La requête a été effectuée et le serveur a répondu avec un code d'état
                // en dehors de la plage de 2xx
                console.error('Données de la réponse du serveur:', e.response.data);
                console.error('Statut de la réponse du serveur:', e.response.status);
                console.error('En-têtes de la réponse du serveur:', e.response.headers);
            } else if (e.request) {
                // La requête a été effectuée mais aucune réponse n'a été reçue
                console.error('Aucune réponse reçue. Requête:', e.request);
            } else {
                // Quelque chose s'est mal passé lors de la configuration de la requête qui a déclenché une erreur
                console.error('Erreur lors de la configuration de la requête:', e.message);
            }
    
            setError(e.message);
        }
    };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return ( 
    <>
        <div className="profile-wrapper">
          
            <section className="profile-content">
                <header className="profile-header">
                    <div className="avatar-section">
                    {user.image ? (
                        <img src={user.image} alt="Avatar" className="profile-avatar" />
                    ) : (
                        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`} alt="Avatar" className="profile-avatar" />
                    )}

                        <div className={`status-badge ${user.premium ? 'premium' : 'non-premium'}`}>
                            {user.premium ? 'Premium' : 'Non Premium'}
                        </div>
                        {user.premium && (
                            <div className="premium-info">
                                <p>Fin du Premium : {formatDate(user.finDuPremium)}</p>
                                <button onClick={handleRenewPremium}>Renouveler</button>
                            </div>
                        )}
                    </div>
                    <div className="profile-info">
                        <div className="personal-info">
                            <h1>Nom et Prénom: {`${user.nom} ${user.prenom}`}</h1>
                            <h2>Email: {user.email}</h2>
                        </div>
                        <div className="contact-info">
                        </div>
                        <div className="additional-info">
                            <p><i className="icon-calendar"></i> Créé le: {formatDate(user.created_at) || ''}</p>
                        </div>
                    </div>
                </header>
                <div className="profile-details">
                

  
                </div>
            </section>
        </div>
        </>
    );
};

export default Profile;