// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Définition du type pour les données de l'utilisateur
type UserData = {
    nom: string;
    prenom: string;
    email: string;
    premium: boolean;
    finDuPremium: string | null;
    isAdmin: boolean;
    avatar?: string;  // Ajoutez cette ligne pour définir la propriété avatar
};
// Définition du type pour le contexte d'authentification
type AuthContextType = {
    isAuthenticated: boolean;
    user: UserData | null;
    setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
    login: (userData: UserData, token: string) => void;
    logout: () => void;
};

// Création du contexte d'authentification avec des valeurs par défaut
export const AuthContext = createContext<AuthContextType>(null!); // Utilisation de 'null!' pour TypeScript

// Fournisseur d'authentification
export const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        console.log('Token stocké:', storedToken); // Ajouter ce log pour vérifier le token stocké
        if (storedToken && storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
        }
      }, []);
      

  const login = (userData: UserData, token: string) => {
    console.log("Fonction login appelée dans AuthContext", userData, token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData)); // Stocker les données de l'utilisateur
    setUser(userData);
    setIsAuthenticated(true);
};

  const logout = () => {
      console.log('Logout appelé'); // Pour déboguer
      localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
      console.log('État après logout:', { user: null, isAuthenticated: false }); // Pour déboguer
  };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => useContext(AuthContext);
