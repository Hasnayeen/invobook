<?php

namespace Tests\Feature\IntegrationTest;

use Tests\TestCase;
use Illuminate\Support\Str;
use App\Base\Models\GithubRepo;
use App\Project\Models\Project;

class GithubIntegrationTest extends TestCase
{
    private $githubToken;

    public function setUp():void
    {
        parent::setUp();

        $this->githubToken = env('GITHUB_TOKEN');
        if (!empty($this->githubToken)) {
            $this->app->instance('github', new TestGithubConnection);
        } else {
            $this->app->instance('github', new FakeGithubConnection);
        }
    }

    /** @test */
    public function user_can_get_repos()
    {
        $this->assertNotEmpty(app('github')->getUserRepos(), 'No repos found. Might be false-positive.');
    }

    /** @test */
    public function user_can_get_github_issues()
    {
        $githubRepoId = env('GITHUB_REPO_ID');
        if(!empty($this->githubToken) && empty($githubRepoId)) {
            $this->markTestSkipped('Github access token `GITHUB_TOKEN` is set but GITHUB_REPO_ID is not set');
        }

        $this->assertNotEmpty(app('github')->getRepoIssues($githubRepoId), 'No issues found in repo. Might be false-positive.');
    }

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
