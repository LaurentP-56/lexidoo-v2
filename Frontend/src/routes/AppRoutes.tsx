// AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes'; // Assurez-vous que le chemin d'accès est correct
import DashboardRoutes from '../components/private/Dashboard/DashboardRoutes'; // Mettez à jour les chemins selon votre structure de projet
import AdminRoutes from '../components/private/Admin/AdminRoutes';
import Login from '../components/public/Login';
import Register from '../components/public/Register';
import Home from '../components/public/Home';
import NotFound from '../components/common/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes protégées pour le tableau de bord */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Route>

        {/* Routes protégées pour la section d'administration */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        {/* Route pour gérer les chemins non trouvés */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
