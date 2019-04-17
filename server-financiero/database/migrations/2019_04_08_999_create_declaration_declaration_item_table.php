<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeclarationDeclarationItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('declaration_declaration_item', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->unsignedInteger('declaration_item_id');
          $table->foreign('declaration_item_id')->references('id')->on('declaration_items')->onDelete('cascade');
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
       Schema::dropIfExists('declaration_declaration_item');
    }
}