<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('mots_gratuits', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('mot_id');
        $table->timestamps();

        $table->foreign('mot_id')->references('id')->on('mots');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mots_gratuits');
    }
};
