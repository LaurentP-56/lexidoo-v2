<?php

// app/Models/SousCategorieTheme.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SousCategorieTheme extends Model
{
    protected $table = 'sous_categorie_themes';

    protected $fillable = ['nom'];
}
