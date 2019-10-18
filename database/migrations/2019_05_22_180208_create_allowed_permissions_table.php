<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllowedPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('allowed_permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('permission_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('group_id')->nullable();
            $table->string('group_type')->nullable();
            $table->timestamps();

            $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('allowed_permissions');
    }
}
