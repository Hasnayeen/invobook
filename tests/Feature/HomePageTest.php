<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Team;
use App\Models\User;
use App\Models\Office;
use App\Models\Project;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HomePageTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function show_latest_three_projects_teams_and_offices()
    {
        $user = factory(User::class)->create();
        $projects = factory(Project::class, 3)->create(['office_id' => null, 'team_id' => null]);
        $teams = factory(Team::class, 3)->create(['office_id' => null]);
        $offices = factory(Office::class, 3)->create();

        $response = $this->actingAs($user)
                         ->get('/');

        $response->assertStatus(200)
                 ->assertViewHas('projects', $projects->toArray())
                 ->assertViewHas('offices', $offices->toArray())
                 ->assertViewHas('teams', $teams->toArray());
    }
}
