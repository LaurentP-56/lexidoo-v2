<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategorieTheme;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CategorieThemesImport;


class CategorieThemeController extends Controller
{
    public function index()
    {
        // Récupérer la liste de toutes les catégories de thèmes
        $categoriesThemes = CategorieTheme::all();

        // Retourner la liste en tant que réponse JSON
        return response()->json($categoriesThemes);
    }

    public function importExcel(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:xlsx',
        ]);

        Excel::import(new CategorieThemesImport, $request->file('file'));

        return response()->json(['message' => 'Catégories importées avec succès']);
    }
    // Ajoutez les méthodes show, store, update et destroy de manière similaire aux exemples précédents.
}
