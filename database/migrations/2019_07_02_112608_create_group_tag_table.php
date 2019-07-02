<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_tag', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('tag_id');
            $table->string('taggable_type');
            $table->unsignedInteger('taggable_id');
            $table->timestamps();

            $table->unique(['tag_id', 'taggable_type', 'taggable_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_tag');
    }
}
