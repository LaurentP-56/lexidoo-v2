import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { API_BASE_URL } from '@src/config.js';
import Header from '../common/Header';
import eLearningImage from '@images/e-learning.jpg';
import SvgNormal from '@images/BoutonGAR.svg';
import SvgHover from '@images/BoutonGAR-Hover.svg';
import { AuthContext } from '../../contexts/AuthContext'; // Chemin mis à jour

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false); // État pour l'image survolée
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const garLoginUrl = "https://idp-auth.partenaire.test-gar.education.fr/path/to/login";

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    console.log("Tentative de connexion avec:", email, password); // Affiche les données de connexion

    try {
      console.log("Envoi de la requête au serveur...");
      const response = await fetch(`http://127.0.0.1:8000/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      console.log("Réponse reçue du serveur:", response);
  
      if (!response.ok) {
        throw new Error('Problème de connexion ou réponse non OK.');
      }
  
      console.log("Vérification du type de contenu...");
      const contentType = response.headers.get('content-type');
      console.log("Type de contenu:", contentType);
  
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('La réponse du serveur n\'est pas du JSON.');
      }
  
      console.log("Lecture de la réponse JSON...");
      const data = await response.json();
      console.log("Données reçues:", data);
  
      if (data.user && data.token) {
        console.log("Connexion réussie, redirection vers le profil...");
        login(data.user, data.token);
        navigate('/dashboard/');
      } else {
        setError("Les données de l'utilisateur sont manquantes dans la réponse de l'API.");
      }
    } catch (err) {
      console.error("Erreur lors de la connexion:", err);
      setError(err.message);
    }
  };

  const redirectToGar = () => {
    window.location.href = garLoginUrl;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <form className="login-page rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-gray-dark hover:bg-blue-700 text-gray-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Se Connecter
              </button>
              <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
                S'enregistrer
              </Link>
            </div>
            {/* Autres options de connexion */}
            </form>
          <div className="flex justify-center text-gray-light space-x-4">
            <button type="button" className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="social-button instagram">
              <i className="fab fa-instagram"></i>
            </button>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={redirectToGar}>
            {isHovered ? <img src={SvgHover} alt="Bouton GAR Hover" /> : <img src={SvgNormal} alt="Bouton GAR" />}
          </div>
            </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img src={eLearningImage} alt="E-learning" className="max-w-xs md:max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;