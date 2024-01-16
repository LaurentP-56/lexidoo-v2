<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProbabilityOfAppearanceToMots extends Migration
{
    public function up()
    {
        Schema::table('mots', function (Blueprint $table) {
            $table->decimal('probability_of_appearance', 5, 2)->default(20.00);
        });
    }

    public function down()
    {
        Schema::table('mots', function (Blueprint $table) {
            $table->dropColumn('probability_of_appearance');
        });
    }
}
