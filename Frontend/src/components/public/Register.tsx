import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import eLearningImage from '@images/e-learning.jpg';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext'; // Mettez à jour le chemin si nécessaire
import { API_BASE_URL } from '@src/config';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login } = useContext(AuthContext); // Utiliser useContext pour accéder à AuthContext

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
  
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          password
        }),
      });
  
      if (!response.ok) {
        throw new Error('Erreur de réponse du serveur');
      }

      const data = await response.json();
      console.log('Inscription réussie:', data);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-lg space-y-8">
          <form className="bg-white login-page rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="firstName">
                Prénom
              </label>
              <input
                id="firstName"
                type="text"
                required
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="lastName">
                Nom
              </label>
              <input
                id="lastName"
                type="text"
                required
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-light text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirmez le mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                placeholder="Confirmez le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="flex items-center justify-between">
              <button className="bg-gray-dark hover:bg-blue-700 text-gray-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                S'inscrire
              </button>
              <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
                Se connecter
              </Link>
            </div>
          </form>
         
         
        </div>
        <div className="hidden lg:block w-1/2">
        <div className="social-login text-gray-light ">
            <p>ou s'inscrire avec</p>
            <div className="social-icons">
              <button type="button" className="social-button ml-4 google">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-button facebook">
                <i className="fab fa-facebook-f ml-4"></i>
              </button>
              <button type="button" className="social-button instagram ml-4">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        <p className="register-link">
            Vous avez déjà un compte? <Link to="/login" className="text-blue-500 hover:text-blue-800">Se connecter</Link>
          </p>
          <img src={eLearningImage} alt="E-learning" className="max-w-xs lg:max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Register;