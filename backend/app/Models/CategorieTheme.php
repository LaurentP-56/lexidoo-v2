<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategorieTheme extends Model
{
    protected $fillable = ['nom', 'theme_id'];

    // Définir la relation avec Theme
    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    // Si vous avez besoin d'accéder aux sous-catégories directement à partir d'un thème
    // vous pouvez définir la relation inverse dans le modèle Theme
}
