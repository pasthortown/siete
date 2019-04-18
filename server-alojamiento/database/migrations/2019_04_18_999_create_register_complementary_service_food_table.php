<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegisterComplementaryServiceFoodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('register_complementary_service_food', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->unsignedInteger('complementary_service_food_id');
          $table->foreign('complementary_service_food_id')->references('id')->on('complementary_service_foods')->onDelete('cascade');
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
       Schema::dropIfExists('register_complementary_service_food');
    }
}