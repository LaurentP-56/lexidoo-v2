import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Login.css';
import { API_BASE_URL } from '@src/config';
import Header from '../common/Header'; // Assurez-vous que le chemin est correct
import eLearningImage from '@images/e-learning.jpg';
import SvgNormal from '@images/BoutonGAR.svg';
import SvgHover from '@images/BoutonGAR-Hover.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false); // État pour l'image survolée
  const navigate = useNavigate();
  const { login } = useAuth(); // Utilisation du contexte d'authentification

  // URL de redirection pour GAR
  const garLoginUrl = "https://idp-auth.partenaire.test-gar.education.fr/path/to/login";

  // Fonction de redirection pour GAR
  const redirectToGar = () => {
    window.location.href = garLoginUrl;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Réinitialiser les erreurs précédentes

    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Identifiants incorrects ou problème de connexion.');
      }

      const data = await response.json();
      login(data.user, data.token); // Mise à jour de l'état d'authentification
      navigate('/Dashboard/profile');
    } catch (err) {
      setError(err.message);
    }
  };

 
  return (
    <div className="login-container">
      <Header />
      <div className="login-form">
        <form onSubmit={handleLogin}>
          {error && <div className="login-error">{error}</div>}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Se Connecter</button>
          <Link to="/register" className="register-link">S'enregistrer</Link>
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
  );
};

export default Login;