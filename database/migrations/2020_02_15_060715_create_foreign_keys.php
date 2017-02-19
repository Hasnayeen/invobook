<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;

class CreateForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
        });
        Schema::table('projects', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
        Schema::table('tasks', function ($table) {
            $table->foreign('assigned_to')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('messages', function ($table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('attachment_id')->references('id')->on('attachments')->onDelete('cascade');
        });
        Schema::table('discussions', function ($table) {
            $table->foreign('posted_by')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('events', function ($table) {
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('user_settings', function ($table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('team_settings', function ($table) {
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
        Schema::table('office_settings', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
        });
        Schema::table('notification_settings', function ($table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('attachments', function ($table) {
            $table->foreign('uploaded_by')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('attachables', function ($table) {
            $table->foreign('attachment_id')->references('id')->on('offices')->onDelete('cascade');
        });
        Schema::table('office_team', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
        Schema::table('office_user', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('team_user', function ($table) {
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('project_user', function ($table) {
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::table('office_project', function ($table) {
            $table->foreign('office_id')->references('id')->on('offices')->onDelete('cascade');
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
        });
        Schema::table('label_task', function ($table) {
            $table->foreign('label_id')->references('id')->on('labels')->onDelete('cascade');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
        });
        Schema::table('milestone_task', function ($table) {
            $table->foreign('milestone_id')->references('id')->on('milestones')->onDelete('cascade');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('teams', function ($table) {
            $table->dropForeign('teams_office_id_foreign');
        });
        Schema::table('projects', function ($table) {
            $table->dropForeign('projects_office_id_foreign');
            $table->dropForeign('projects_team_id_foreign');
        });
        Schema::table('tasks', function ($table) {
            $table->dropForeign('tasks_assigned_to_foreign');
        });
        Schema::table('messages', function ($table) {
            $table->dropForeign('messages_user_id_foreign');
            $table->dropForeign('messages_attachment_id_foreign');
        });
        Schema::table('discussions', function ($table) {
            $table->dropForeign('discussions_posted_by_foreign');
        });
        Schema::table('events', function ($table) {
            $table->dropForeign('events_created_by_foreign');
        });
        Schema::table('user_settings', function ($table) {
            $table->dropForeign('user_settings_user_id_foreign');
        });
        Schema::table('team_settings', function ($table) {
            $table->dropForeign('team_settings_team_id_foreign');
        });
        Schema::table('office_settings', function ($table) {
            $table->dropForeign('office_settings_office_id_foreign');
        });
        Schema::table('notification_settings', function ($table) {
            $table->dropForeign('notification_settings_user_id_foreign');
        });
        Schema::table('attachments', function ($table) {
            $table->dropForeign('attachments_uploaded_by_foreign');
        });
        Schema::table('attachables', function ($table) {
            $table->dropForeign('attachables_attachment_id_foreign');
        });
        Schema::table('office_team', function ($table) {
            $table->dropForeign('office_team_office_id_foreign');
            $table->dropForeign('office_team_team_id_foreign');
        });
        Schema::table('office_user', function ($table) {
            $table->dropForeign('office_user_office_id_foreign');
            $table->dropForeign('office_user_user_id_foreign');
        });
        Schema::table('team_user', function ($table) {
            $table->dropForeign('team_user_team_id_foreign');
            $table->dropForeign('team_user_user_id_foreign');
        });
        Schema::table('project_user', function ($table) {
            $table->dropForeign('project_user_project_id_foreign');
            $table->dropForeign('project_user_user_id_foreign');
        });
        Schema::table('office_project', function ($table) {
            $table->dropForeign('office_project_office_id_foreign');
            $table->dropForeign('office_project_project_id_foreign');
        });
        Schema::table('label_task', function ($table) {
            $table->dropForeign('label_task_label_id_foreign');
            $table->dropForeign('label_task_task_id_foreign');
        });
        Schema::table('milestone_task', function ($table) {
            $table->dropForeign('milestone_task_milestone_id_foreign');
            $table->dropForeign('milestone_task_task_id_foreign');
        });
    }
}
