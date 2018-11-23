<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGithubReposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('github_repos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('github_repo_id')->comment('Id returned from github graphql api for the repository');
            $table->string('repo_name');
            $table->string('entity_type');
            $table->integer('entity_id');
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
        Schema::dropIfExists('github_repos');
    }
}
