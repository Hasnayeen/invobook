<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MessageTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
    }

    /** @test */
    public function user_can_read_message_of_a_group()
    {
        $user1 = factory('App\Models\User')->create();
        $user2 = factory('App\Models\User')->create();

        // Test for projects
        $project = factory('App\Models\Project')->create();
        $user1Messages = factory('App\Models\Message', 2)->create([
            'user_id'          => $user1->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);
        $user2Messages = factory('App\Models\Message', 3)->create([
            'user_id'          => $user2->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        $response = $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ]);
        $response->assertJsonFragment([
            'status'           => 'success',
            'total'            => 5,
            'user_id'          => (string) $user1['id'],
            'user_id'          => (string) $user2['id'],
            'messageable_type' => 'project',
            'messageable_id'   => (string) $project->id,
            'body'             => $user1Messages[0]['body'],
        ]);

        // Test for teams
        $team = factory('App\Models\Team')->create();
        $user1Messages = factory('App\Models\Message', 2)->create([
            'user_id'          => $user1->id,
            'messageable_type' => 'team',
            'messageable_id'   => $team->id,
        ]);
        $user2Messages = factory('App\Models\Message', 3)->create([
            'user_id'          => $user2->id,
            'messageable_type' => 'team',
            'messageable_id'   => $team->id,
        ]);

        $response = $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ]);
        $response->assertJsonFragment([
            'status'           => 'success',
            'total'            => 5,
            'user_id'          => (string) $user1['id'],
            'user_id'          => (string) $user2['id'],
            'messageable_type' => 'team',
            'messageable_id'   => (string) $team->id,
            'body'             => $user1Messages[0]['body'],
        ]);

        // Test for offices
        $office = factory('App\Models\Office')->create();
        $user1Messages = factory('App\Models\Message', 2)->create([
            'user_id'          => $user1->id,
            'messageable_type' => 'office',
            'messageable_id'   => $office->id,
        ]);
        $user2Messages = factory('App\Models\Message', 3)->create([
            'user_id'          => $user2->id,
            'messageable_type' => 'office',
            'messageable_id'   => $office->id,
        ]);

        $response = $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ]);
        $response->assertJsonFragment([
            'status'           => 'success',
            'total'            => 5,
            'user_id'          => (string) $user1['id'],
            'user_id'          => (string) $user2['id'],
            'messageable_type' => 'office',
            'messageable_id'   => (string) $office->id,
            'body'             => $user1Messages[0]['body'],
        ]);
    }
}
