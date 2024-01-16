<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mot extends Model
{
    protected $fillable = [
        'nom',
        'level',
        'traduction',
        'commentaire',
       // 'audio',
        'gratuit',
        'probability_of_appearance'
    ];

    // Méthodes supplémentaires au besoin
}
