<?php

namespace Tests\Feature;

use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->team = factory('App\Models\Team')->create();
        $this->ownerRole = Role::create(['name' => 'owner']);
        $this->user->assignRole($this->ownerRole);
    }

    /** @test */
    public function user_can_see_team_page()
    {
        $this->admin_can_create_team();

        $this->actingAs($this->user)->get('teams/new-team')->assertSee('New Team');
    }

    /** @test */
    public function admin_can_create_team()
    {
        $permission = Permission::create(['name' => 'create team']);
        $this->ownerRole->givePermissionTo($permission);

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
        $this->assertTrue($this->user->hasPermissionTo('view team->new-team'));
        $this->assertTrue($this->user->hasPermissionTo('edit team->new-team'));
        $this->assertTrue($this->user->hasPermissionTo('delete team->new-team'));
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
