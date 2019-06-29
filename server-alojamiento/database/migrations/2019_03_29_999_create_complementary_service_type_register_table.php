<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplementaryServiceTypeRegisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('complementary_service_type_register', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->unsignedInteger('complementary_service_type_id');
          $table->foreign('complementary_service_type_id')->references('id')->on('complementary_service_types')->onDelete('cascade');
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
       Schema::dropIfExists('complementary_service_type_register');
    }
}
