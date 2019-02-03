<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Project;
use Illuminate\Support\Str;

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

        $this->assertDatabaseHas('services', ['name' => 'github', 'enabled' => true, 'active' => true]);
    }

    private function addService($name)
    {
        $token = Str::random(40);

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

    /** @test */
    public function user_can_enable_a_service()
    {
        $this->addService('github');
        $this->actingAs($this->user)
        ->call('PUT', '/admin/services/github', [
            'status' => true,
        ])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Github integration has been enabled',
        ]);
    }

    /** @test */
    public function user_can_disable_a_service()
    {
        $this->addService('github');
        $this->actingAs($this->user)
        ->call('PUT', '/admin/services/github', [
            'status' => false,
        ])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Github integration has been disabled',
        ]);
    }
}
