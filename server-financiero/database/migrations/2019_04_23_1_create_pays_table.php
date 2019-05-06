<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('pays', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->double('amount_payed',8,2)->nullable($value = true);
          $table->double('amount_to_pay',8,2)->nullable($value = true);
          $table->dateTime('pay_date')->nullable($value = true);
          $table->longText('annotation')->nullable($value = true);
          $table->string('code',50)->nullable($value = true);
          $table->dateTime('max_pay_date')->nullable($value = true);
          $table->double('taxes',8,2)->nullable($value = true);
          $table->integer('ruc_id')->nullable($value = true);
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('pays');
    }
}