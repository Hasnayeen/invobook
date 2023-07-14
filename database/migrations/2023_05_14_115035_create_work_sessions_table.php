<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('work_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('duration')->default(0)->comment('in seconds');
            $table->timestamp('start');
            $table->timestamp('end');
            $table->string('description')->nullable();
            $table->integer('rate_in_cents')->nullable();
            $table->string('currency', 3)->nullable();
            $table->foreignUlid('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignUlid('team_id')->constrained('teams')->cascadeOnDelete();
            $table->foreignUlid('task_id')->nullable()->constrained('tasks')->cascadeOnDelete();
            $table->foreignUlid('project_id')->nullable()->constrained('projects')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_sessions');
    }
};
