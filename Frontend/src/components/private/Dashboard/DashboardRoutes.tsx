// DashboardRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import DashboardHome from './DashboardHome';
import Profile from './Profile';
import Souscription from './Souscription';
import JeuInterface from '../Jeu/JeuInterface';
import NotFound from '../../common/NotFound';

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="souscription" element={<Souscription />} />
        <Route path="jeu" element={<JeuInterface />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
