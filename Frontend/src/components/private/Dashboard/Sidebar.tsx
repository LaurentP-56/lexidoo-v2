
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext'; // Assurez-vous que le chemin d'accès est correct
import logo from '@images/logo.png';
import defaultAvatar from '@images/default-avatar.png';
  
const Sidebar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate(); // Hook pour la navigation


  const isAdmin = user?.isAdmin ?? false;
  const isPremium = user?.isPremium ?? false;

  const handleLogout = () => {
    logout(); // Cette fonction devrait effacer le token de localStorage
    navigate('/login'); // Redirige l'utilisateur vers la page de connexion
  };

  let userStatus = 'Utilisateur';
  if (isAdmin) {
    userStatus = 'Admin';
  } else if (isPremium) {
    userStatus = 'Premium';
  }

    return (
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white w-64 h-full fixed top-0 py-4 z-50">
        <div className="flex flex-col items-center mb-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 mb-2" />
          </a>
          <img 
  src={user?.email ? `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}` : defaultAvatar} 
  alt="Avatar" 
  className="h-16 w-16 rounded-full mb-2" 
/>

          <p className="text-sm">{userStatus}</p>
        </div>
  
        <div className="mb-4">
          <p className="text-sm pl-4 font-semibold text-white uppercase mb-2">Mon Compte</p>
          <div className="pl-4">
            <Link to="/dashboard/profile" className="block menu-link">
              Mon Profil
            </Link>
            <Link to="/dashboard/souscription" className="block menu-link">
              Mon Abonnement
            </Link>
            <div className="pl-4">
              <Link to="/dashboard/jeu" className="block menu-link">
                Retour à l'apprentissage
              </Link>
            </div>
          </div>
        </div>
  
        {isAdmin && (
          <>
            <div className="mb-4">
              <p className="text-sm pl-4 font-semibold text-white uppercase mb-2">Gestion des données</p>
              <div className="pl-4">
                <Link to="/admin/themes" className="block menu-link">
                  Thèmes
                </Link>
                <Link to="/admin/categories" className="block menu-link">
                  Catégories
                </Link>
                <Link to="/admin/sous-categories" className="block menu-link">
                  Sous-Catégories
                </Link>
                <Link to="/admin/mots" className="block menu-link">
                  Mots
                </Link>
              </div>
            </div>
  
            <div className="mb-4">
              <p className="text-sm pl-4 font-semibold text-white uppercase mb-2">Paramètres</p>
              <div className="pl-4">
                <Link to="/admin/userlist" className="block menu-link">
                  Utilisateurs
                </Link>
                <Link to="/admin/tarif" className="block menu-link">
                  Tarif
                </Link>
                <Link to="/admin/proba" className="block menu-link">
                  Taux d'apparitions
                </Link>
              </div>
            </div>
          </>
        )}
  
        <div className="mb-4">
        <button onClick={handleLogout} className="block px-4 py-2 bg-red-500 text-white rounded-full">
          Se Déconnecter
        </button>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
