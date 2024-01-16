<?php

// app/Models/Theme.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Theme extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'theme_id'];
    protected $table = 'themes';

    // Assurez-vous que le nom du champ est le même que dans votre base de données

    // Relation One-to-Many avec les mots
    public function mots()
    {
        return $this->hasMany(Mot::class, 'theme_id');
    }
}
