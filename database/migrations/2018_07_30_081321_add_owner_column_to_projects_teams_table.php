<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOwnerColumnToProjectsTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->integer('owner_id')->unsigned()->comment('user id of the owner of the project');
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('teams', function (Blueprint $table) {
            $table->integer('owner_id')->unsigned()->comment('user id of the owner of the project');
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('offices', function (Blueprint $table) {
            $table->integer('owner_id')->unsigned()->comment('user id of the owner of the project');
            $table->foreign('owner_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
