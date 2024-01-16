<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Mot;

class UserMotController extends Controller
{
    public function addMotAppris(Request $request, $userId, $motId)
    {
        // Code pour ajouter le mot $motId aux mots appris par l'utilisateur $userId
        $user = User::find($userId);
        $mot = Mot::find($motId);

        if (!$user || !$mot) {
            return response()->json(['message' => 'Utilisateur ou mot introuvable'], 404);
        }

        $user->motsAppris()->attach($mot);

        return response()->json(['message' => 'Mot ajouté avec succès'], 200);
    }

    public function deleteMotAppris(Request $request, $userId, $motId)
    {
        // Code pour supprimer le mot $motId des mots appris par l'utilisateur $userId
        $user = User::find($userId);
        $mot = Mot::find($motId);

        if (!$user || !$mot) {
            return response()->json(['message' => 'Utilisateur ou mot introuvable'], 404);
        }

        $user->motsAppris()->detach($mot);

        return response()->json(['message' => 'Mot supprimé avec succès'], 200);
    }

    public function getMotsApprisByUser($userId)
    {
        // Code pour récupérer la liste des mots appris par l'utilisateur $userId
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'Utilisateur introuvable'], 404);
        }

        $motsAppris = $user->motsAppris;

        return response()->json($motsAppris, 200);
    }
}
