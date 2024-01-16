<?php

// app/Models/MotGratuit.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MotGratuit extends Model
{
    protected $table = 'mots_gratuits';

    protected $fillable = ['mot_id'];

    // Relation avec le modèle Mot
    public function mot()
    {
        return $this->belongsTo(Mot::class);
    }
}
