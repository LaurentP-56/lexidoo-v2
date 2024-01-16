<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    use Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'nom', 'prenom', 'email', 'tel', 'adresse', 'ville', 'pays',
        'premium', 'offre_premium', 'finDuPremium', 'image', 'provider',
        'provider_id', 'password','isAdmin',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



}
