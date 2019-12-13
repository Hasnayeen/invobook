<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Team\Models\Team;
use Laravel\Passport\Passport;
use App\Base\Exceptions\UserIsNotMember;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Access\AuthorizationException;

class TeamTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->team = factory(Team::class)->create();
    }

    /** @test */
    public function user_can_see_public_teams_and_teams_of_which_user_is_member()
    {
        $team = factory(Team::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($team);
        $team->members()->save($this->user);

        $this->json('GET', 'teams/')->assertJsonFragment([
            'status' => 'success',
            'name'   => $team->name,
        ]);

        Passport::actingAs($this->user);
        $this->json('GET', 'teams/')->assertJsonFragment([
            'status' => 'success',
            'name'   => $team->name,
        ]);
    }

    /** @test */
    public function user_with_permission_can_see_team_page()
    {
        $this->user_with_permission_can_create_team();
        $id = Team::where('name', 'New Team')->first()->id;

        $this->actingAs($this->user)
             ->json('GET', 'teams/' . $id)
             ->assertJsonFragment([
                 'status' => 'success',
                 'name'   => 'New Team',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_see_team_page()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);
        $this->user_with_permission_can_create_team();
        $id = Team::where('name', 'New Team')->first()->id;

        $this->actingAs($user)->get('teams/' . $id)->assertSee('New Team');
    }

    /** @test */
    public function user_with_permission_can_create_team()
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
    }

    /** @test */
    public function user_without_permission_cant_create_team()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);

        $this->actingAs($user)->post('/teams', [
            'name'        => 'New Team',
            'description' => 'Team of all new members',
        ]);
    }

    /** @test */
    public function add_user_to_team()
    {
        Notification::fake();

        $user = factory('App\Base\Models\User')->create();
        $this->actingAs($this->user)->post('/members', [
            'user_id'       => $user->id,
            'group_type'    => 'team',
            'group_id'      => $this->team->id,
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

    /** @test */
    public function user_with_permission_can_delete_a_team()
    {
        $this->user_with_permission_can_create_team();

        $id = Team::where('name', 'New Team')->first()->id;

        $this->actingAs($this->user)->delete('/teams/' . $id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The team has been deleted',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_delete_a_team()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);

        $this->user_with_permission_can_create_team();

        $id = Team::where('name', 'New Team')->first()->id;

        $this->actingAs($user)->delete('teams/' . $id);
    }

    /** @test */
    public function remove_user_from_team()
    {
        $this->add_user_to_team();

        $this->assertCount(1, $this->team->members);

        $user = $this->team->members->first();

        $this->actingAs($this->user)->delete('/members', [
            'user_id'       => $user->id,
            'group_type'    => 'team',
            'group_id'      => $this->team->id,
        ])->assertJson([
            'status'  => 'success',
            'message' => 'User removed from the team',
            'user'    => [
                'id'       => $user->id,
                'name'     => $user->name,
                'username' => $user->username,
                'avatar'   => $user->avatar,
            ],
        ]);

        $this->assertEmpty($this->team->fresh()->members);
    }

    /** @test */
    public function cannot_remove_user_from_team_if_not_a_member()
    {
        $this->expectException(UserIsNotMember::class);

        $user = factory('App\Base\Models\User')->create();

        $this->actingAs($this->user)
             ->delete('/members', [
                 'user_id'       => $user->id,
                 'group_type'    => 'team',
                 'group_id'      => $this->team->id,
             ]);
    }

    /** @test */
    public function admin_can_make_team_public()
    {
        $this->actingAs($this->user)
             ->post('public-teams/' . $this->team->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => localize('team.Team has been made public'),
             ]);
        $this->assertDatabaseHas('teams', ['id' => $this->team->id, 'public' => true]);
    }

    /** @test */
    public function admin_can_make_team_private()
    {
        $this->actingAs($this->user)
             ->post('public-teams/' . $this->team->id);

        $this->delete('public-teams/' . $this->team->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => localize('team.Team has been made private'),
             ]);
        $this->assertDatabaseHas('teams', ['id' => $this->team->id, 'public' => false]);
    }
}
