<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->team = factory('App\Models\Team')->create();
    }

    /** @test */
    public function user_can_see_team_page()
    {
        $response = $this->actingAs($this->user)->get('teams/' . $this->team->slug);
        $response->assertSee($this->team->name);
    }

    /** @test */
    public function admin_can_create_team()
    {
        $admin = factory('App\Models\User')->create(['role' => 2]);
        $response = $this->actingAs($admin)->post('/teams', [
            'name'        => 'New Team',
            'description' => 'Team of all new members',
        ]);
        $response->assertJsonFragment([
            'status'      => 'success',
            'name'        => 'New Team',
            'description' => 'Team of all new members',
            'owner_id'    => $admin->id,
        ]);
        $this->assertDatabaseHas('teams', ['name' => 'New Team', 'description' => 'Team of all new members', 'owner_id' => $admin->id]);
    }

    /** @test */
    public function user_can_see_tasks_of_a_team()
    {
        $team = factory('App\Models\Team')->create();
        $tasks = factory('App\Models\Task', 5)->create([
            'taskable_type' => 'team',
            'taskable_id'   => $team->id,
        ]);
        $response = $this->actingAs($this->user)->get('/teams/' . $team->slug . '/tasks');
        $response->assertSee($tasks[0]->title);
    }

    /** @test */
    public function add_user_to_team()
    {
        $user = factory('App\Models\User')->create();
        $response = $this->actingAs($this->user)->post('/members', [
            'user_id'       => $user->id,
            'resource_type' => 'team',
            'resource_id'   => $this->team->id,
        ]);
        $response->assertJson([
            'status'  => 'success',
            'message' => 'User added to the team',
            'user'    => [
                'id'       => $user->id,
                'name'     => $user->name,
                'username' => $user->username,
                'avatar'   => $user->avatar,
            ],
        ]);
    }
}
