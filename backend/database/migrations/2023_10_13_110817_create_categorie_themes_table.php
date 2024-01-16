<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategorieThemesTable extends Migration
{
    public function up()
    {
        Schema::create('categorie_themes', function (Blueprint $table) {
            $table->id();
            $table->char('nom', 100);
            $table->bigInteger('theme_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('categorie_themes');
    }
}
