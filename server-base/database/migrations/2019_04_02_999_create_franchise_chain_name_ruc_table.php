<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFranchiseChainNameRucTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('franchise_chain_name_ruc', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->unsignedInteger('franchise_chain_name_id');
          $table->foreign('franchise_chain_name_id')->references('id')->on('franchise_chain_names')->onDelete('cascade');
          $table->unsignedInteger('ruc_id');
          $table->foreign('ruc_id')->references('id')->on('rucs')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('franchise_chain_name_ruc');
    }
}