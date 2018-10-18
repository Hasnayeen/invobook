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
            $table->integer('parent_id')->unsigned()->nullable();
            $table->string('name');
            $table->boolean('completed')->default(false);
            $table->integer('assigned_to')->unsigned()->nullable();
            $table->boolean('archived')->default(false);
            $table->text('notes')->nullable();
            $table->date('due_on');
            $table->string('related_to')->nullable()->comment('ids of task that are related with this');
            $table->string('taskable_type')->comment('office, team or projects');
            $table->integer('taskable_id')->unsigned();
            $table->foreign('parent_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->foreign('assigned_to')->references('id')->on('users')->onDelete('cascade');
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
