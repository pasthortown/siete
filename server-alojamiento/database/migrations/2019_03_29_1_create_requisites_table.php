<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequisitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('requisites', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->string('name',100)->nullable($value = true);
          $table->longText('description')->nullable($value = true);
          $table->unsignedInteger('register_type_id');
          $table->foreign('register_type_id')->references('id')->on('register_types')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('requisites');
    }
}