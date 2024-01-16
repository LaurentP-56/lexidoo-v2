<?php
// App/Http/Controllers/SubscriptionController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Tarifs;


class SubscriptionController extends Controller
{
    public function getSubscriptionDetails()
    {
        $user = Auth::user();
        $tarifs = Tarifs::where('nom_offre', $user->offre_premium)->first(); // Trouver le tarif basé sur le nom de l'offre

        return response()->json([
            'isPremium' => $user->premium,
            'finDuPremium' => $user->finDuPremium,
            'nomOffrePremium' => $tarifs ? $tarifs->nom_offre : null,
        ]);
    }


}
