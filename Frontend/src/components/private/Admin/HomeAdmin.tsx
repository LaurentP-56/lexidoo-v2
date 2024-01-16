import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';

class HomeAdmin extends Component {
  render() {
    return (
      <div className="admin-container">
        <SidebarAdmin />
        <div className="admin-content">
          {/* Ajoutez ici le contenu de votre page d'accueil admin */}
          <h1>Bienvenue dans l'espace d'administration</h1>
          {/* Autres composants ou éléments que vous souhaitez afficher */}
        </div>
      </div>
    );
  }
}

export default HomeAdmin;
