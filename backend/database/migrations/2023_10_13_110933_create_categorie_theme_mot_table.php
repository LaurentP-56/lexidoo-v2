<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategorieThemeMotTable extends Migration
{
    public function up()
    {
        Schema::create('categorie_theme_mot', function (Blueprint $table) {
            $table->bigInteger('mot_id')->unsigned();
            $table->bigInteger('categorie_theme_id')->unsigned();
            $table->primary(['mot_id', 'categorie_theme_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('categorie_theme_mot');
    }
}
