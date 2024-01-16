<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    // Récupérer tous les thèmes et sous-thèmes
    public function index()
    {
        $mainThemes = Theme::whereNull('parent_id')->get();
        $subThemes = Theme::whereNotNull('parent_id')->get();

        return response()->json([
            'main_themes' => $mainThemes,
            'sub_themes' => $subThemes
        ]);
    }

    // Récupérer un thème spécifique par ID et ses sous-thèmes associés
    public function show($id)
    {
        $theme = Theme::find($id);

        if (!$theme) {
            return response()->json(['message' => 'Thème non trouvé'], 404);
        }

        $subThemes = Theme::where('parent_id', $id)->get();

        return response()->json([
            'theme' => $theme,
            'sub_themes' => $subThemes
        ]);
    }

    // Créer un nouveau thème ou sous-thème
    public function store(Request $request)
    {
        $theme = Theme::create($request->all());
        return response()->json($theme, 201);
    }

    // Mettre à jour un thème ou sous-thème spécifique
    public function update(Request $request, $id)
    {
        $theme = Theme::find($id);

        if (!$theme) {
            return response()->json(['message' => 'Thème non trouvé'], 404);
        }

        $theme->update($request->all());

        return response()->json($theme, 200);
    }

    // Supprimer un thème ou sous-thème
    public function destroy($id)
    {
        $theme = Theme::find($id);

        if (!$theme) {
            return response()->json(['message' => 'Thème non trouvé'], 404);
        }

        $theme->delete();

        return response()->json(['message' => 'Thème supprimé avec succès'], 200);
    }

    public function getSubThemes($theme_id)
{
    $subThemes = Theme::where('parent_id', $theme_id)->get();
    return response()->json($subThemes);
}
}
