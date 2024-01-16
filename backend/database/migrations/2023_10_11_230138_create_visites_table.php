<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisitesTable extends Migration
{
    public function up()
    {
        Schema::create('visites', function (Blueprint $table) {
            $table->id();
            $table->string('ip_address');
            $table->string('user_agent');
            $table->timestamp('visited_at');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('visites');
    }
}

