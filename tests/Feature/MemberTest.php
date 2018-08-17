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
        $this->user = factory('App\Models\User')->create();
    }

    /**
     * Get all members of project/team/office.
     * @test
     * */
    public function get_all_members_of_a_group()
    {
        $users = factory('App\Models\User', 2)->create();
        $project = factory('App\Models\Project')->create([
            'owner_id' => $this->user->id,
        ]);
        $project->members()->saveMany($users);

        $team = factory('App\Models\Team')->create([
            'owner_id' => $this->user->id,
        ]);
        $team->members()->saveMany($users);

        $office = factory('App\Models\Office')->create([
            'owner_id' => $this->user->id,
        ]);
        $office->members()->saveMany($users);

        $response = $this->actingAs($this->user)->call('GET', 'members', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 2,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
        ]);

        $response = $this->actingAs($this->user)->call('GET', 'members', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 2,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
        ]);

        $response = $this->actingAs($this->user)->call('GET', 'members', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ]);
        $response->assertJsonFragment([
            'status'   => 'success',
            'items'    => 2,
            'username' => $users['0']['username'],
            'username' => $users['1']['username'],
        ]);
    }
}
