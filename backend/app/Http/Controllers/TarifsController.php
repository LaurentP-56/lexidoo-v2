<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tarifs;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class TarifsController extends Controller
{
    /**
     * Afficher tous les tarifs.
     */
    public function index()
    {
        $tarifs = Tarifs::all();
        return response()->json($tarifs);
    }

    /**
     * Créer un nouveau tarif.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom_offre' => 'required|string|max:255',
            'prix' => 'required|numeric',
            // Autres validations pour les champs supplémentaires
        ]);

        $tarif = Tarifs::create($validatedData);
        return response()->json($tarif, 201);
    }

    /**
     * Afficher un tarif spécifique.
     */
    public function show($id)
    {
        $tarif = Tarifs::find($id);

        if (!$tarif) {
            return response()->json(['message' => 'Tarif not found'], 404);
        }

        return response()->json($tarif);
    }

    /**
     * Mettre à jour un tarif spécifique.
     */
    public function update(Request $request, $id)
{
    // Trouver le tarif par son ID
    $tarif = Tarifs::find($id);

    // Vérifier si le tarif existe
    if (!$tarif) {
        return response()->json(['message' => 'Tarif not found'], 404);
    }

    // Validation des données de la requête
    $validatedData = $request->validate([
        'nom_offre' => 'required|string|max:255', // Assurez-vous que le nom de l'offre est fourni
        'prix' => 'required|numeric', // Validation du prix
        'description' => 'nullable|string', // La description est optionnelle
        'duree' => 'nullable|string|max:255' // La durée est optionnelle
    ]);

    // Mise à jour du tarif avec les données validées
    $tarif->update($validatedData);

    // Retourner le tarif mis à jour
    return response()->json($tarif);
}

    /**
     * Supprimer un tarif.
     */
    public function destroy($id)
    {
        $tarif = Tarifs::find($id);

        if (!$tarif) {
            return response()->json(['message' => 'Tarif not found'], 404);
        }

        $tarif->delete();
        return response()->json(['message' => 'Tarif deleted successfully']);
    }

    /**
     * Recherche de tarifs selon des critères spécifiques.
     */
    public function search(Request $request)
    {
        $query = Tarifs::query();

        if ($request->has('nom_offre')) {
            $query->where('nom_offre', 'like', '%' . $request->nom_offre . '%');
        }

        // Ajouter d'autres filtres si nécessaire

        return response()->json($query->get());
    }

    // Autres méthodes du contrôleur...
}
