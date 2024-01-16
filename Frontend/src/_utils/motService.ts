// _utils/motService.ts
import { API_BASE_URL } from '@src/config';

export const fetchRandomQuestion = async (niveau, sousTheme) => {
    try {
        const url = `${API_BASE_URL}/questions?niveau=${niveau}&sousTheme=${sousTheme}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération de la question", error);
        return null;
    }
};

export const fetchSubThemes = async (categorie) => {
    try {
        const url = `${API_BASE_URL}/subthemes?categorie=${categorie}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des sous-thèmes", error);
        return null;
    }
};

export const fetchWord = async (sousTheme) => {
    try {
        const url = `${API_BASE_URL}/words?sousTheme=${sousTheme}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération du mot", error);
        return null;
    }
};
