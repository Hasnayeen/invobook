<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPublicColumnToGroup extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('offices', function (Blueprint $table) {
            $table->boolean('public')->default(false)->comment('is open to non-user');
        });
        Schema::table('projects', function (Blueprint $table) {
            $table->boolean('public')->default(false)->comment('is open to non-user');
        });
        Schema::table('teams', function (Blueprint $table) {
            $table->boolean('public')->default(false)->comment('is open to non-user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
        });
    }
}
