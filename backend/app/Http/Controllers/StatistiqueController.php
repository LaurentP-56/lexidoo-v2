<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;
use App\Models\User; // Assurez-vous d'importer le modèle User

class StatistiqueController extends Controller
{
    public function getStatistiques()
    {
        $nombreVisiteurs = DB::table('visiteur')->count();
        $nombreUtilisateurs = User::count();
        $nombreUtilisateursPremium = User::where('premium', true)->count();

        return response()->json([
            'nombreVisiteurs' => $nombreVisiteurs,
            'nombreUtilisateurs' => $nombreUtilisateurs,
            'nombreUtilisateursPremium' => $nombreUtilisateursPremium,
        ]);
    }
}
