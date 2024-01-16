<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMotThemeTable extends Migration
{
    public function up()
    {
        Schema::create('mot_theme', function (Blueprint $table) {
            $table->bigInteger('mot_id')->unsigned();
            $table->bigInteger('theme_id')->unsigned();
            $table->primary(['mot_id', 'theme_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('mot_theme');
    }
}
