<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserProfileController extends Controller
{
    // Afficher le profil de l'utilisateur connecté
    public function getProfile()
    {
        $user = Auth::user();
        return response()->json($user);
    }

    // Mettre à jour le profil de l'utilisateur
    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|max:255|unique:users,email,' . $user->id,
            // Ajouter d'autres champs si nécessaire
        ]);

        // Mettre à jour les informations utilisateur
        $user->fill($validatedData);
        $user->save();

        return response()->json(['message' => 'Profile updated successfully', 'user' => $user]);
    }

    // Modifier la photo de profil
    public function changeProfilePicture(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'photo' => 'required|image|max:2048', // Limite à 2MB
        ]);

        if ($request->hasFile('photo')) {
            // Supprimer l'ancienne photo si elle existe
            if ($user->photo_url && Storage::exists($user->photo_url)) {
                Storage::delete($user->photo_url);
            }

            // Stocker la nouvelle photo et mettre à jour l'URL dans la base de données
            $path = $request->file('photo')->store('profile_photos');
            $user->photo_url = $path;
            $user->save();

            return response()->json(['message' => 'Photo updated successfully', 'photo_url' => $path]);
        }

        return response()->json(['message' => 'No photo provided'], 400);
    }

    // Ajouter d'autres méthodes si nécessaire
}
