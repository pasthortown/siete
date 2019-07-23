<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcedureJustificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('procedure_justifications', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->longText('justification')->nullable($value = true);
          $table->string('code',10)->nullable($value = true);
          $table->string('father_code',10)->nullable($value = true);
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('procedure_justifications');
    }
}