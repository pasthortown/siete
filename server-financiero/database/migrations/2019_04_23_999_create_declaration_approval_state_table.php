<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeclarationApprovalStateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('declaration_approval_state', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->unsignedInteger('approval_state_id');
          $table->foreign('approval_state_id')->references('id')->on('approval_states')->onDelete('cascade');
          $table->unsignedInteger('declaration_id');
          $table->foreign('declaration_id')->references('id')->on('declarations')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('declaration_approval_state');
    }
}