<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Team;

class TeamTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->team = factory('App\Models\Team')->create();
    }

    /** @test */
    public function user_can_see_team_page()
    {
        $this->admin_can_create_team();
        $id = Team::where('name', 'New Team')->first()->id;

        $this->actingAs($this->user)->get('teams/' . $id)->assertSee('New Team');
    }

    /** @test */
    public function admin_can_create_team()
    {
        $this->actingAs($this->user)->post('/teams', [
            'name'        => 'New Team',
            'description' => 'Team of all new members',
        ])->assertJsonFragment([
            'status'      => 'success',
            'name'        => 'New Team',
            'description' => 'Team of all new members',
            'owner_id'    => $this->user->id,
        ]);
        $this->assertDatabaseHas('teams', ['name' => 'New Team', 'description' => 'Team of all new members', 'owner_id' => $this->user->id]);

        $id = Team::where('name', 'New Team')->first()->id;
        $this->assertTrue($this->user->hasPermissionTo('view team->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('edit team->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('delete team->' . $id));
    }

    /** @test */
    public function add_user_to_team()
    {
        $user = factory('App\Models\User')->create();
        $this->actingAs($this->user)->post('/members', [
            'user_id'       => $user->id,
            'resource_type' => 'team',
            'resource_id'   => $this->team->id,
        ])->assertJson([
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
