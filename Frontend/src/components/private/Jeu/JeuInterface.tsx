import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import TimerSlider from './Timer/TimerSlider';
import ThemesSlider from './Themes/ThemesSlider';
import SousThemesSlider from './SousThemesSlider/SousThemesSlider';
import MotsSlider from './MotSlider/MotSlider'; // Assurez-vous que le chemin est correct

const JeuInterface = () => {
    const [niveau, setNiveau] = useState<number | null>(null);
    const [temps, setTemps] = useState<string | null>(null);
    const [themeId, setThemeId] = useState<number | null>(null);
    const [sousThemeId, setSousThemeId] = useState<number | null>(null);

    useEffect(() => {
        // Initialisation du jeu ou autres effets
    }, []);

    const handleNiveauSelection = (niveauChoisi: number) => {
        setNiveau(niveauChoisi);
        // Réinitialiser les autres états lors de la sélection d'un nouveau niveau
        setTemps(null);
        setThemeId(null);
        setSousThemeId(null);
    };

    const handleTempsSelection = (tempsChoisi: string) => {
        setTemps(tempsChoisi);
        // Réinitialiser les sélections suivantes lors de la sélection du temps
        setThemeId(null);
        setSousThemeId(null);
    };

    const handleThemeSelection = (themeChoisi: number) => {
        setThemeId(themeChoisi);
        // Réinitialiser la sélection du sous-thème lors de la sélection d'un nouveau thème
        setSousThemeId(null);
    };

    const handleSousThemeSelection = (sousThemeChoisi: number) => {
        setSousThemeId(sousThemeChoisi);
    };

    return (
        <div className="jeu-interface">
            {!niveau && <Slider onSelect={handleNiveauSelection} />}
            {niveau && !temps && <TimerSlider onSelect={handleTempsSelection} />}
            {niveau && temps && !themeId && <ThemesSlider onSelect={handleThemeSelection} />}
            {themeId && !sousThemeId && <SousThemesSlider themeId={themeId} onSelect={handleSousThemeSelection} />}
            {themeId && sousThemeId && <MotsSlider niveau={niveau} themeId={themeId} sousThemeId={sousThemeId} />}
            {/* MotsSlider est ajouté à la fin de la chaîne de conditionnels */}
        </div>
    );
};

export default JeuInterface;
