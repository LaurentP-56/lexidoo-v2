import React, { useEffect, useState } from 'react';
import './ThemesPage.css'; // Assurez-vous d'inclure votre CSS ici
import { API_BASE_URL } from '@src/config';

const ThemesPage = () => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch('${API_BASE_URL}/themes');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des thèmes');
        }
        const data = await response.json();
        setThemes(data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };
  
    fetchThemes();
  }, []);
  
  return (
    <div className="table-container">
      <h1>Thèmes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du Thème</th>
          </tr>
        </thead>
        <tbody>
          {themes.map((theme) => (
            <tr key={theme.id}>
              <td>{theme.id}</td>
              <td>{theme.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThemesPage;
