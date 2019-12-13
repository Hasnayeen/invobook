<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Project\Models\Project;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Event;
use App\Base\Notifications\BecameNewMember;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Access\AuthorizationException;

class MemberTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        Mail::fake();
        Event::fake();
    }

    /**
     * Get all members of project/team/office.
     * @test
     * */
    public function get_all_members_of_a_group()
    {
        $users = factory('App\Base\Models\User', 3)->create();
        $project = factory('App\Project\Models\Project')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $project->members()->saveMany($users);

        $team = factory('App\Team\Models\Team')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $team->members()->saveMany($users);

        $office = factory('App\Office\Models\Office')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $office->members()->saveMany($users);

        $this->actingAs($users[0])->call('GET', 'members', [
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $this->actingAs($users[0])->call('GET', 'members', [
            'group_type' => 'team',
            'group_id'   => $team->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $this->actingAs($users[0])->call('GET', 'members', [
            'group_type' => 'office',
            'group_id'   => $office->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);
    }

    /** @test */
    public function adding_member_to_a_group_sends_him_notification()
    {
        Notification::fake();

        $this->actingAs($this->user);

        $user = factory(User::class)->create();
        $project = factory(Project::class)->create();

        $payload = [
            'user_id'       => $user->id,
            'group_type'    => 'project',
            'group_id'      => $project->getKey(),
        ];

        $response = $this->post('members', $payload);

        $response->assertStatus(200);

        $response->assertJson([
            'status'   => 'success',
            'message'  => 'User added to the project',
            'user'     => [
                'id'        => $user->id,
                'name'      => $user->name,
                'username'  => $user->username,
                'avatar'    => $user->avatar,
            ],
        ]);

        $this->assertDatabaseHas('project_user', ['project_id' => $project->id, 'user_id' => $user->id]);

        Notification::assertSentTo($user, BecameNewMember::class, function ($notification) use ($user, $project) {
            $mailData = $notification->toMail($user)->toArray();

            $this->assertEquals("You have been added to {$project->name}", $mailData['subject']);

            $this->assertContains(sprintf(
                '%s added you to the %s: %s',
                auth()->user()->name,
                $project->getType(),
                $project->name
            ), $mailData['introLines']);

            return true;
        });
    }

    /** @test */
    public function user_with_permission_can_add_member_to_group()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $user = factory(\App\Base\Models\User::class)->create();

        $this->actingAs($this->user)
             ->post('members', [
                 'user_id'    => $user->id,
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'User added to the project',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_add_member_to_group()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);
        $project = factory(\App\Project\Models\Project::class)->create();
        $user2 = factory(\App\Base\Models\User::class)->create();

        $res = $this->actingAs($user)
             ->post('members', [
                 'user_id'    => $user2->id,
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ]);
    }

    /** @test */
    public function user_with_permission_can_remove_member_to_group()
    {
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $user = factory(\App\Base\Models\User::class)->create();
        $project->members()->save($user);

        $this->actingAs($this->user)
             ->delete('members', [
                 'user_id'    => $user->id,
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'User removed from the project',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_remove_member_to_group()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Base\Models\User::class)->create(['role_id' => 5]);
        $project = factory(\App\Project\Models\Project::class)->create();
        $user2 = factory(\App\Base\Models\User::class)->create();
        $project->members()->save($user2);

        $res = $this->actingAs($user)
             ->delete('members', [
                 'user_id'    => $user2->id,
                 'group_type' => 'project',
                 'group_id'   => $project->id,
             ]);
    }
}
