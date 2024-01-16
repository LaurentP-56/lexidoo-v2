<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSousCategorieThemesTable extends Migration
{
    public function up()
    {
        Schema::create('sous_categorie_themes', function (Blueprint $table) {
            $table->id();
            $table->char('nom', 100);
            $table->bigInteger('categorie_theme_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sous_categorie_themes');
    }
}
