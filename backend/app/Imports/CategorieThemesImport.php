<?php
// App/Imports/CategorieThemesImport.php

namespace App\Imports;

use App\Models\CategorieTheme;
use Maatwebsite\Excel\Concerns\ToModel;

class CategorieThemesImport implements ToModel
{
    public function model(array $row)
    {
        return new CategorieTheme([
            'nom' => $row[0], // Assurez-vous que cela correspond à la colonne 'nom' dans Excel
        ]);
    }
}
