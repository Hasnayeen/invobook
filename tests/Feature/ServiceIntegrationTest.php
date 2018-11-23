<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Project;

class ServiceIntegrationTest extends TestCase
{
    /** @test */
    public function user_can_add_service()
    {
        $this->addService('github')
            ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Service added successfully',
            ]);
    }

    private function addService($name)
    {
        $token = str_random(40);

        return $this->actingAs($this->user)->post('admin/services', [
            'name'         => $name,
            'access_token' => $token,
        ]);
    }

    /** @test */
    public function user_can_connect_github_repo_to_project()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $githubRepoId = str_random();
        $this->actingAs($this->user)
             ->post('/services/github/connected-repos', [
                 'github_repo_id' => $githubRepoId,
                 'repo_name'      => 'repo_name',
                 'entity_type'    => 'project',
                 'entity_id'      => $project->id,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Github repository connected successfully',
             ]);
        $this->assertDatabaseHas('github_repos', ['github_repo_id' => $githubRepoId, 'repo_name' => 'repo_name', 'entity_id' => $project->id]);
    }
}
