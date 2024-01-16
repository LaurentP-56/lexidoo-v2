<?php

namespace App\Http\Controllers;

use App\Models\CategorieTheme;
use Illuminate\Http\Request;

class CategorieThemeController extends Controller
{
    public function index()
    {
        $categories = CategorieTheme::with('theme')->get();
        return response()->json($categories);
    }

    // Méthodes pour créer, mettre à jour et supprimer des sous-thèmes
    // ...

    // Pour obtenir les sous-thèmes par theme_id
    public function getByTheme($theme_id)
    {
        $categories = CategorieTheme::where('theme_id', $theme_id)->get();
        return response()->json($categories);
    }
}
