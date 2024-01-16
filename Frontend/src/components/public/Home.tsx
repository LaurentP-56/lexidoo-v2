// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import catImg from '@images/cat.png';
import girlsImg from '@images/girls.png';
// Assurez-vous d'avoir cette image dans vos assets
import './Home.css';
import Header from '../common/Header';
import TarifPub from './Tarifs';


const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* En-tête */}
<Header />
      {/* Corps de la page */}
            
      <div className="row" style={{ paddingTop: '96px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '55%' }}>
          <img src={catImg} alt="Cat" style={{ width: '5em', display: 'block', marginBottom: '1em' }} />
          {renderCitation("Qui mieux que vous sait ce qu'il vous faut ? Avec Lexidoo, c'est vous qui décidez de mémoriser ou non chaque mot proposé !")}
          {renderCitation("Sans grammaire mais avec des mots, on peut se faire comprendre (l'inverse, bof !), alors c'est parti !")}
          {/* IFrame ou autre contenu */}
          <div style={{ textAlign: 'right' }}>
            <Link to="/login" className="btn btn-primary btn-lg active start-btn">Je veux commencer !</Link>
          </div>
          <TarifPub />
        </div>
        <div style={{ width: '45%' }}>
          <img src={girlsImg} alt="Girls" style={{ width: '75%' }} />
        </div>
      </div>

      {/* Pied de page */}
      <div className="text-center" style={{ marginTop: '2rem' }}>
        <Link to="/cgu">CONDITIONS GENERALES D’ABONNEMENT ET D’UTILISATION</Link>
      </div>
    </div>

  );
};

// Fonction pour rendre une citation
function renderCitation(text) {
  return (
    <div className="citation ml-40" style={{ marginBottom: '1em' }}>
      <div style={{ background: '#FFF', color: '#0039CB', borderRadius: '8px', padding: '2em', fontSize: '15px', lineHeight: '100%', textAlign: 'left' }}>
        {text}
      </div>
    </div>
  );
}

export default Home;
