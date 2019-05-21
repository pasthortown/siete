<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTariffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('tariffs', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->integer('price')->nullable($value = true);
          $table->integer('year')->nullable($value = true);
          $table->integer('id_ruc')->nullable($value = true);
          $table->unsignedInteger('tariff_type_id');
          $table->foreign('tariff_type_id')->references('id')->on('tariff_types')->onDelete('cascade');
          $table->unsignedInteger('capacity_type_id');
          $table->foreign('capacity_type_id')->references('id')->on('capacity_types')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('tariffs');
    }
}