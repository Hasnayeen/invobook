<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testProjectList()
    {
        $user = factory(User::class)->create();
        $projects = factory(Project::class, 3)->create(['office_id' => null, 'team_id' => null]);
        $response = $this->actingAs($user)
                           ->get('/projects');

        $response->assertStatus(200)
                 ->assertViewHas('projects');
    }
}
