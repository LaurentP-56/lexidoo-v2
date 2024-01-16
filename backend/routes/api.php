<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AuthController,
    CategorieThemeController,
    MotController,
    SousCategorieThemeController,
    TarifsController,
    ThemeController,
    UserController,
    UserProfileController,
    UserMotController,
    LevelController,
    SubscriptionController
};

// Routes pour l'authentification
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Routes pour l'authentification avec GAR (si utilisé)
Route::get('/garlogin', [AuthController::class, 'garLogin']);
Route::get('/garlogout', [AuthController::class, 'garLogout']);

// Routes pour la gestion des utilisateurs
Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']); // Liste tous les utilisateurs
    Route::get('/{id}', [UserController::class, 'show'])->where('id', '[0-9]+'); // Affiche un utilisateur spécifique

    Route::middleware('auth:sanctum')->group(function() {
        Route::post('/updatePhoto', [UserController::class, 'updatePhoto']);
        Route::get('/subscription', [UserController::class, 'getSubscriptionDetails']); // Détails de l'abonnement
        Route::get('/profile', [UserController::class, 'getProfile']); // Profil de l'utilisateur authentifié
    });
});

// Routes pour la gestion des profils utilisateur
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [UserProfileController::class, 'getProfile']);
    Route::put('/profile', [UserProfileController::class, 'updateProfile']);
    Route::post('/profile/photo', [UserProfileController::class, 'changeProfilePicture']);
});

// Routes pour la gestion des thèmes
//Route::prefix('themes')->group(function () {
//    Route::get('/', [ThemeController::class, 'showAllThemes']);
//    Route::get('/{id}', [ThemeController::class, 'showOneTheme'])->where('id', '[0-9]+');
//    Route::get('/count', [ThemeController::class, 'countAllThemes']);
//    Route::post('categories-themes/import', [CategorieThemeController::class, 'importExcel']);
//});

// Routes pour la gestion des catégories de thèmes
Route::prefix('categories-themes')->group(function () {
    Route::get('/', [CategorieThemeController::class, 'showAllCategories']);
    Route::get('/{id}', [CategorieThemeController::class, 'showOneCategorie'])->where('id', '[0-9]+');
});

// Routes pour la gestion des sous-catégories de thèmes
//Route::prefix('sous-categories-themes')->group(function () {
//    Route::get('/', [SousCategorieThemeController::class, 'showAll']);
//    Route::get('/{id}', [SousCategorieThemeController::class, 'showOne'])->where('id', '[0-9]+');
//});
Route::patch('/mots/{mot}/update-probability', [MotController::class, 'updateProbability']);

Route::get('/mots', [MotController::class, 'index']);
Route::post('/mots', [MotController::class, 'store']);
Route::get('/mots/filter', [MotController::class, 'filter']);
// Routes pour mettre à jour et supprimer des mots

// Routes pour la gestion des mots
Route::prefix('mots')->group(function () {
    Route::get('/', [MotController::class, 'getAllMots']);
    Route::get('/{id}', [MotController::class, 'getOneMot'])->where('id', '[0-9]+');
    Route::post('mots/import', [MotController::class, 'importExcel']);
});
Route::get('/themes/{theme_id}/sous-themes', [ThemeController::class, 'getSubThemes']);
Route::get('/levels', [LevelController::class, 'index']);

// Administration

// Liste les Users et modifie le premium
Route::prefix('users')->group(function () {
    Route::get('/userlist', [UserController::class, 'index']); // Liste tous les utilisateurs
    Route::put('/userlist/{id}/toggle-premium', [UserController::class, 'togglePremium']); // Change le statut Premium
});
// Routes pour la gestion des tarifs
Route::get('/tarifs', [TarifsController::class, 'index']);
Route::put('/tarifs/{id}', [TarifsController::class, 'update']);

// Themes
Route::get('/themes/{id}', [ThemeController::class, 'show']);

Route::get('/themes', [ThemeController::class, 'index']);
Route::post('/themes', [ThemeController::class, 'store']);
Route::put('/themes/{id}', [ThemeController::class, 'update']);
Route::delete('/themes/{id}', [ThemeController::class, 'destroy']);

// Ajoutez des routes pour update et delete selon les besoins.
Route::get('/categorie-themes', [CategorieThemeController::class, 'index']);
Route::get('/categorie-themes/{theme_id}', [CategorieThemeController::class, 'getByTheme']);
// Ajoutez des routes pour créer, mettre à jour et supprimer des sous-thèmes.



// Route pour obtenir les détails de l'abonnement
Route::middleware('auth:sanctum')->get('/subscription-details', [SubscriptionController::class, 'getSubscriptionDetails']);



// Autres routes simples
Route::get('a-propos', function () {
    return 'À propos de notre application';
});

// Ajoutez ici d'autres routes personnalisées si nécessaire

