// AdminRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Themes from './Themes';
import Userlist from './Userlist';
import Tarif from './Tarif';
import DashboardLayout from '../Dashboard/DashboardLayout';
// Autres composants...

const AdminRoutes = () => {
  return (
    <DashboardLayout>
    <Routes>
      <Route path="themes" element={<Themes />} />
      <Route path="userlist" element={<Userlist />} />
      <Route path="tarif" element={<Tarif />}/>
    </Routes>
    </DashboardLayout>
  );
};

export default AdminRoutes;