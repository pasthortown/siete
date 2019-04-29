<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApprovalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('approvals', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->string('name',50)->nullable($value = true);
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
       Schema::dropIfExists('approvals');
    }
}