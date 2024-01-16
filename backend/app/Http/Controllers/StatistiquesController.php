<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class StatistiquesController extends Controller
{
    public function afficherStatistiques()
    {
        $visites = DB::table('visites')->count();
        $totalUtilisateurs = DB::table('users')->count();
        $utilisateursPremium = DB::table('users')->where('premium', 1)->count();
        $mots = DB::table('mots')->count();
        $themes = DB::table('themes')->count();
        $categories = DB::table('categorie_themes')->count();
        $sousCategories = DB::table('sous_categorie_themes')->count();

        // Autres statistiques que vous souhaitez ajouter ici

        return view('statistiques', compact('visites', 'totalUtilisateurs', 'utilisateursPremium', 'mots', 'themes', 'categories', 'sousCategories'));
    }
}
