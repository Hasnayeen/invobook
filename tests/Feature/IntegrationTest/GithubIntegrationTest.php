<?php

namespace Tests\Feature\IntegrationTest;

use Tests\TestCase;
use Illuminate\Support\Str;
use App\Base\Models\GithubRepo;
use App\Project\Models\Project;

class GithubIntegrationTest extends TestCase
{
    /** @test */
    public function user_can_get_all_connected_github_repo()
    {
        $token = Str::random(40);
        $project = factory(Project::class)->create();
        GithubRepo::create([
            'github_repo_id' => $token,
            'repo_name'      => 'goodwork',
            'entity_type'    => 'project',
            'entity_id'      => $project->id,
        ]);

        $this->actingAs($this->user)
             ->get('services/github/connected-repos')
             ->assertJsonFragment([
                 'status'           => 'success',
                 'repo_name'        => 'goodwork',
                 'entity_type'      => 'project',
                 'entity_id'        => (string) $project->id,
             ]);
    }

    /** @test */
    public function user_can_connect_github_repo_to_project()
    {
        $project = factory(Project::class)->create(['owner_id' => $this->user->id]);
        $githubRepoId = Str::random();
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
