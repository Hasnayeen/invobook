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

    public function setUp()
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }

    /** @test */
    public function show_latest_three_projects_teams_and_offices()
    {
        $projects = factory(Project::class, 3)->create(['office_id' => null, 'team_id' => null]);
        $teams = factory(Team::class, 3)->create(['office_id' => null]);
        $offices = factory(Office::class, 3)->create();

        $response = $this->actingAs($this->user)
                         ->get('/');

        $response->assertStatus(200)
                 ->assertSee($projects[0]->name)
                 ->assertViewHas('offices', $offices->toArray())
                 ->assertViewHas('teams', $teams->toArray());
    }

    /** @test */
    public function user_can_see_members_of_projects_teams()
    {
        $project = factory(Project::class)->create(['office_id' => null, 'team_id' => null]);
        $users = factory(User::class, 5)->create();
        $project->members()->attach($users->map(function ($user) {return $user->id;}));
        $response = $this->actingAs($this->user)->get('/');
        $response->assertSee($users[0]->name)
                 ->assertSee($users[1]->name)
                 ->assertSee($users[2]->name);
    }
}
