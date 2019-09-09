<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRoadmapEnabledColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_settings', function (Blueprint $table) {
            $table->boolean('roadmap_enabled')->default(false)->comment('whether roadmap option is enabled or not');
        });
        Schema::table('team_settings', function (Blueprint $table) {
            $table->boolean('roadmap_enabled')->default(false)->comment('whether roadmap option is enabled or not');
        });
        Schema::table('office_settings', function (Blueprint $table) {
            $table->boolean('roadmap_enabled')->default(false)->comment('whether roadmap option is enabled or not');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_settings', function (Blueprint $table) {
        });
    }
}
