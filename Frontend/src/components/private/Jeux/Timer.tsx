// Timer.js
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(60); // Initialisation à 60 secondes

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // Nettoyage du timer à la fin
        return () => clearInterval(timer);
    }, []);

    return (
        // Contenu JSX de votre composant de minuterie
        <div>{seconds} secondes</div>
    );
};

export default Timer;
