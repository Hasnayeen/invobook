<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\User;
use App\Core\Models\Project;
use App\Core\Notifications\BecameNewMember;
use Illuminate\Support\Facades\Notification;

class MemberTest extends TestCase
{
    /**
     * Get all members of project/team/office.
     * @test
     * */
    public function get_all_members_of_a_group()
    {
        $users = factory('App\Core\Models\User', 3)->create();
        $project = factory('App\Core\Models\Project')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $project->members()->saveMany($users);

        $team = factory('App\Core\Models\Team')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $team->members()->saveMany($users);

        $office = factory('App\Core\Models\Office')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $office->members()->saveMany($users);

        $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ])->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);
    }

    /**
     * @test
     */
    public function adding_member_to_a_group_sends_him_notification()
    {
        Notification::fake();

        $this->actingAs($this->user);

        $user = factory(User::class)->create();
        $project = factory(Project::class)->create();

        $payload = [
            'user_id'       => $user->id,
            'resource_type' => 'project',
            'resource_id'   => $project->getKey(),
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
}
