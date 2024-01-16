<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    public function create()
    {
        // Assuming you won't create users via API, but you can adjust this if needed.
        return response()->json(['message' => 'Not implemented'], 501);
    }

    public function store(Request $request)
    {
        // Logique pour enregistrer un nouvel utilisateur
        // This will depend on how you want to handle user creation via API.
    }
    public function getProfile(Request $request)
{
    return $request->user();
}
public function showAllUsers()
{
    $users = User::all();
    return response()->json($users);
}

    public function updatePhoto(Request $request)
    {
        $user = $request->user();

        if ($request->hasFile('photo')) {
            // Traiter et enregistrer la photo
            // Par exemple, enregistrer le fichier et mettre à jour l'URL de la photo dans la base de données
             $path = $request->file('photo')->store('photos');

            // Mettre à jour l'URL de la photo de l'utilisateur
             $user->photo_url = $path;
            // $user->save();

            return response()->json(['message' => 'Photo mise à jour avec succès']);
        }

        return response()->json(['message' => 'Aucune photo fournie'], 400);
    }
    public function edit($id)
    {
        // Assuming you won't edit users via API, but you can adjust this if needed.
        return response()->json(['message' => 'Not implemented'], 501);
    }

    public function update(Request $request, $id)
    {
        // Logique pour mettre à jour un utilisateur
        // This will depend on how you want to handle user updates via API.
    }
    public function updatePremium(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Mise à jour des champs 'offre_premium' et 'finDuPremium'
        $user->offre_premium = $request->input('offre_premium');

        if ($user->offre_premium === 'Mensuel') {
            $user->finDuPremium = now()->addMonths(1);
        } elseif ($user->offre_premium === 'Trimestriel') {
            $user->finDuPremium = now()->addMonths(3);
        } elseif ($user->offre_premium === 'Annuel') {
            $user->finDuPremium = now()->addMonths(12);
        } elseif ($user->offre_premium === 'Gratuit') {
            $user->finDuPremium = null;
        }

        $user->save();

        return response()->json(['message' => 'le status à été correctement mis a jour', 'user' => $user]);
    }
    public function getSubscriptionDetails(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        // Retourner les détails de l'abonnement de l'utilisateur
        return response()->json([
            'isPremium' => $user->premium,
            'finDuPremium' => $user->finDuPremium,
            'offrePremium' => $user->offre_premium,
        ]);
    }
    public function updateAbonnement(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->offre_premium = $request->input('offre_premium');

        $finDuPremium = null;
        switch ($user->offre_premium) {
            case 'Mensuel':
                $finDuPremium = now()->addMonths(1);
                break;
            case 'Trimestriel':
                $finDuPremium = now()->addMonths(3);
                break;
            case 'Annuel':
                $finDuPremium = now()->addMonths(12);
                break;
            // Gérez le cas d'une offre illimitée si nécessaire
        }

        $user->finDuPremium = $finDuPremium;
        $user->save();

        return response()->json(['message' => 'Abonnement updated successfully']);
    }


    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
