<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiscussionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discussions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('content')->comment('html string');
            $table->text('raw_content')->comment('content in delta format');
            $table->integer('posted_by')->unsigned();
            $table->boolean('archived')->default(false);
            $table->boolean('draft')->default(true);
            $table->string('discussionable_type')->comment('office, team or projects');
            $table->integer('discussionable_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->integer('cycle_id')->unsigned()->nullable();
            $table->foreign('posted_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('discussions');
    }
}
