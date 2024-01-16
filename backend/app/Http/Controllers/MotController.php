<?php

namespace App\Http\Controllers;

use App\Models\Mot;
use Illuminate\Http\Request;
use App\Models\Level;
use Illuminate\Support\Facades\Log; // Assurez-vous que cette ligne est ajoutée


class MotController extends Controller
{
    public function index(Request $request)
    {
        if ($request->has('level')) {
            $mots = Mot::where('level', $request->level)->get();
        } else {
            $mots = Mot::all();
        }

        // Log des données pour débogage
        \Log::info('Mots:', $mots->toArray());

        // Assurer la conversion des données en tableau pour éviter les problèmes d'encodage
        return response()->json($mots->toArray());
    }

    public function store(Request $request)
    {
        $mot = Mot::create($request->all());
        return response()->json($mot, 201);
    }
    public function getAllMots()
    {
        $mots = Mot::all();
        return response()->json($mots);
    }
    // Méthodes pour mettre à jour et supprimer des mots
    // ...
    public function updateProbability(Request $request, Mot $mot)
    {
        $newProbability = $request->input('probability_of_appearance');
        $mot->update(['probability_of_appearance' => $newProbability]);

        return response()->json($mot);
    }

    // Méthode pour filtrer les mots par niveau ou par gratuité
    public function filter(Request $request)
{
    $query = Mot::query();

    // Filtrer par l'ID de niveau
    if ($request->has('level_id')) {
        $level_id = $request->input('level_id');
        $query->where('level_id', $level_id);
    }

    // Filtrer par le tableau de niveaux dans le champ JSON 'level'
    if ($request->has('levels')) {
        $levels = $request->input('levels'); // Ceci devrait être un tableau de strings, par exemple: ["1", "2"]
        foreach ($levels as $level) {
            $query->whereRaw("JSON_CONTAINS(level, '\"$level\"')");
        }
    }

    // Filtrer par gratuité
    if ($request->has('gratuit')) {
        $query->where('gratuit', $request->input('gratuit'));
    }

    $mots = $query->get();

    // Log des données pour débogage
    Log::info('Mots filtrés:', $mots->toArray());

    try {
        return response()->json($mots);
    } catch (\Exception $e) {
        Log::error('Erreur d\'encodage JSON dans MotController@filter: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur d\'encodage des données.'], 500);
    }
}

}
