// SidebarAdmin.tsx
import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div className="sidebar-admin">
      <Link to="/admin/categories">Categories</Link>
      <Link to="/admin/sous-categories">Sous-Catégories</Link>
      <Link to="/admin/themes">Thèmes</Link>
      <NavLink to="/admin/userlist" className="block menu-link" activeClassName="active">
      Utilisateurs
    </NavLink>      <Link to="/admin/tarif">Tarif</Link>
      {/* Ajoutez d'autres liens de la sidebar ici */}
    </div>
  );
};

export default SidebarAdmin;
