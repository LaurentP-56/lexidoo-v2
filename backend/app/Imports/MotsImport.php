<?php
// App\Imports\MotsImport.php

namespace App\Imports;

use App\Models\Mot;
use Maatwebsite\Excel\Concerns\ToModel;

class MotsImport implements ToModel
{
    public function model(array $row)
    {
        return new Mot([
            'nom' => $row[0],  // Assurez-vous que cela correspond à la colonne 'nom' dans Excel
            'level' => $row[1],  // Assurez-vous que cela correspond à la colonne 'level'
            'traduction' => $row[2],  // Assurez-vous que cela correspond à la colonne 'traduction'
            'commentaire' => $row[3] ?? null,  // Si la colonne 'commentaire' est optionnelle
            'audio' => $row[4] ?? null,  // Si la colonne 'audio' est optionnelle
            'gratuit' => $row[5] ?? 0,  // Si la colonne 'gratuit' est optionnelle
            // La colonne 'probability_of_appearance' sera automatiquement à 20%
        ]);
    }
}
