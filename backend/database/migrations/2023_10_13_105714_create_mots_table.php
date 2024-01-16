<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMotsTable extends Migration
{
    public function up()
    {
        Schema::create('mots', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('level');
            $table->string('traduction');
            $table->string('commentaire')->nullable();
            $table->longText('audio')->nullable(); // Utilisation de longText pour stocker de grandes données binaires
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mots');
    }
}

