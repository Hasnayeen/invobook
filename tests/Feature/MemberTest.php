<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MemberTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
    }

    /**
     * Get all members of project/team/office
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

        $response = $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $response = $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);

        $response = $this->actingAs($users[0])->call('GET', 'members', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 3,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
            'username' => $users['2']['username'],
        ]);
    }
}
