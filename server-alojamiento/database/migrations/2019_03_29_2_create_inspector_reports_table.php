<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectorReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('inspector_reports', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->longText('body')->nullable($value = true);
          $table->longText('params')->nullable($value = true);
          $table->unsignedInteger('inspection_assigment_id');
          $table->foreign('inspection_assigment_id')->references('id')->on('inspection_assigments')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('inspector_reports');
    }
}