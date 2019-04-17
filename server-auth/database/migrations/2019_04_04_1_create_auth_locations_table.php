<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('auth_locations', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->string('code_ubication',100)->nullable($value = true);
          $table->unsignedInteger('account_rol_id');
          $table->foreign('account_rol_id')->references('id')->on('account_rols')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('auth_locations');
    }
}