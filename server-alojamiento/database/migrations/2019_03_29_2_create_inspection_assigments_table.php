<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionAssigmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('inspection_assigments', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->integer('id_user_inspector')->nullable($value = true);
          $table->dateTime('date_assigment')->nullable($value = true);
          $table->dateTime('date_inspection')->nullable($value = true);
          $table->unsignedInteger('register_id');
          $table->foreign('register_id')->references('id')->on('registers')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('inspection_assigments');
    }
}