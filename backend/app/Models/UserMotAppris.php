<?php

// app/Models/UserMotAppris.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserMotAppris extends Model
{
    protected $table = 'user_mot_appris';

    protected $fillable = ['user_id', 'mot_id', 'connu'];

    // Relation avec le modèle User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relation avec le modèle Mot
    public function mot()
    {
        return $this->belongsTo(Mot::class);
    }
}
