<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Team;
use App\Models\User;
use App\Models\Office;
use App\Models\Project;

class HomePageTest extends TestCase
{
    /** @test */
    public function show_latest_three_projects_teams_and_offices()
    {
        $projects = factory(Project::class, 3)->create(['office_id' => null, 'team_id' => null]);
        $teams = factory(Team::class, 3)->create(['office_id' => null]);
        $offices = factory(Office::class, 3)->create();

        $this->actingAs($this->user)
            ->get('/')
            ->assertStatus(200)
            ->assertSee($projects[0]->name)
            ->assertSee($teams[0]->name)
            ->assertSee($offices[0]->name);
    }

    /** @test */
    public function user_can_see_members_of_projects_teams()
    {
        $project = factory(Project::class)->create(['office_id' => null, 'team_id' => null]);
        $users = factory(User::class, 5)->create();
        $project->members()->attach($users->map(function ($user) {
            return $user->id;
        }));
        $this->actingAs($this->user)
            ->get('/')
            ->assertSee($users[0]->name)
            ->assertSee($users[1]->name)
            ->assertSee($users[2]->name);
    }
}
