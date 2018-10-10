<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Project;
use App\Notifications\BecameNewMember;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Notification;

class MemberTest extends TestCase
{
    /**
     * Get all members of project/team/office.
     * @test
     * */
    public function get_all_members_of_a_group()
    {
        $users = factory('App\Models\User', 3)->create();
        $project = factory('App\Models\Project')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $project->members()->saveMany($users);

        $team = factory('App\Models\Team')->create([
            'owner_id' => $users[0]['id'],
        ]);
        $team->members()->saveMany($users);

        $office = factory('App\Models\Office')->create([
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

        $project = factory(Project::class)->create();
        factory(Permission::class)->create(['name' => 'view project->' . $project->id]);

        $payload = [
            'user_id'       => $this->user->id,
            'resource_type' => 'project',
            'resource_id'   => $project->getKey(),
        ];

        $response = $this->post('members', $payload);

        $response->assertStatus(200);
        $response->assertJson([
            'status'   => 'success',
            'message'  => 'User added to the project',
            'user'     => [
                'id'        => $this->user->id,
                'name'      => $this->user->name,
                'username'  => $this->user->username,
                'avatar'    => $this->user->avatar,
            ],
        ]);

        Notification::assertSentTo(
            $this->user,
            BecameNewMember::class
        );
    }
}
