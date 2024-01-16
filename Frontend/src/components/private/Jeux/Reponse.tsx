import React from 'react';
// import styles from '../styles/Reponse.module.css';

const Reponse = ({ data, onContinue }) => {
    return (
        <div>
            <h4>Réponse: {data.reponse}</h4>
            <button onClick={onContinue}>Question Suivante</button>
        </div>
    );
};

export default Reponse;
