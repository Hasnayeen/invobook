<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamSettingsModal extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('team_id')->unsigned();
            $table->boolean('task_enabled')->default(true)->comment('is task tool enabled');
            $table->boolean('discussion_enabled')->default(true)->comment('is discussion tool enabled');
            $table->boolean('message_enabled')->default(true)->comment('is message tool enabled');
            $table->boolean('event_enabled')->default(true)->comment('is event tool enabled');
            $table->boolean('file_enabled')->default(true)->comment('is file tool enabled');
            $table->timestamps();

            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_settings');
    }
}
