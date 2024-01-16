<?php

// App\Models\Level.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    // Assurez-vous d'avoir défini les attributs remplissables si nécessaire
    protected $fillable = [
        'label',
        'sub_label',
        'classe',
        // autres champs au besoin
    ];

    public function mots()
    {
        return $this->hasMany(Mot::class, 'level_id');
    }
}
