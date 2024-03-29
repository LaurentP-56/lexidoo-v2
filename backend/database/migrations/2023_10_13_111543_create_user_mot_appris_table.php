<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserMotApprisTable extends Migration
{
    public function up()
    {
        Schema::create('user_mot_appris', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('mot_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_mot_appris');
    }
}
