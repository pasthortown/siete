<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectorReportAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('inspector_report_attachments', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamps();
          $table->string('inspector_report_attachment_file_type',50)->nullable($value = true);
          $table->string('inspector_report_attachment_file_name',50)->nullable($value = true);
          $table->longText('inspector_report_attachment_file')->nullable($value = true);
          $table->unsignedInteger('inspector_report_id');
          $table->foreign('inspector_report_id')->references('id')->on('inspector_reports')->onDelete('cascade');
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('inspector_report_attachments');
    }
}