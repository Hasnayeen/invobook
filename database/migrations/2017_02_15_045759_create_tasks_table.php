<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->boolean('completed')->default(false);
            $table->integer('assigned_to')->unsigned()->nullable();
            $table->boolean('archived')->default(false);
            $table->text('notes');
            $table->dateTime('due_on');
            $table->string('taskable_type')->comment('office, team or projects');
            $table->integer('taskable_id')->unsigned();
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
        Schema::dropIfExists('tasks');
    }
}
