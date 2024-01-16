<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMotSousCategorieThemeTable extends Migration
{
    public function up()
    {
        Schema::create('mot_sous_categorie_theme', function (Blueprint $table) {
            $table->bigInteger('mot_id')->unsigned();
            $table->bigInteger('sous_categorie_theme_id')->unsigned();
            $table->primary(['mot_id', 'sous_categorie_theme_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('mot_sous_categorie_theme');
    }
}
