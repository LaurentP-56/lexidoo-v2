// Dashboard/index.tsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DashboardHome from './DashboardHome'; // Votre page d'accueil du tableau de bord
import ChooseLevelPage from './ChooseLevelPage';
import Profile from './Profile';
import Souscription from './Souscription';
import ThemePage from './ThemePage';
import JeuInterface from '../Jeu/JeuInterface';
import NotFound from '../../common/NotFound';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="dashboard-container" style={{ display: 'flex' }}>
            <div className="dashboard-content" style={{ flex: 1 }}>
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/level" element={<ChooseLevelPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/souscription" element={<Souscription />} />
                    <Route path="/theme/:themeId" element={<ThemePage />} />
                    <Route path="/jeu" element={<JeuInterface />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                
            </div>
        </div>
    );
};

export default Dashboard;
