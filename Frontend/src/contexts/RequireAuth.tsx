// RequireAuth.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assurez-vous que le chemin est correct

export function RequireAuth({ children }) {
    const { isAuthenticated } = useAuth();
  let location = useLocation();

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
