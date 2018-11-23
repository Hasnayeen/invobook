<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Message;
use App\Events\MessageCreated;
use App\Events\MessageUpdated;
use Illuminate\Support\Facades\Event;

class MessageTest extends TestCase
{
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

        $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'project',
            'resource_id'   => $project->id,
        ])->assertJsonFragment([
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

        $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'team',
            'resource_id'   => $team->id,
        ])->assertJsonFragment([
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

        $this->actingAs($user1)->call('GET', '/messages', [
            'resource_type' => 'office',
            'resource_id'   => $office->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'total'            => 5,
            'user_id'          => (string) $user1['id'],
            'user_id'          => (string) $user2['id'],
            'messageable_type' => 'office',
            'messageable_id'   => (string) $office->id,
            'body'             => $user1Messages[0]['body'],
        ]);
    }

    /** @test */
    public function user_can_create_message()
    {
        Event::fake();

        $project = factory('App\Models\Project')->create(['owner_id' => $this->user->id]);

        $this->actingAs($this->user)->post('messages/', [
            'message'          => 'New message',
            'resource_type'    => 'project',
            'resource_id'      => $project->id,
        ])->assertJsonFragment([
            'status'           => 'success',
            'body'             => 'New message',
            'user_id'          => $this->user->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        $this->assertDatabaseHas('messages', [
            'body'             => 'New message',
            'user_id'          => $this->user->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        $message = Message::where(['body' => 'New message'])->first();

        Event::assertDispatched(MessageCreated::class, function ($e) use ($message) {
            return $e->message->id === $message->id;
        });
    }

    /** @test */
    public function user_can_delete_message()
    {
        $project = factory('App\Models\Project')->create(['owner_id' => $this->user->id]);

        $message = factory('App\Models\Message')->create([
            'user_id'          => $this->user->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        $this->actingAs($this->user)->delete('messages/' . $message->id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Message has been deleted',
             ]);

        $this->assertDatabaseMissing('messages', ['id' => $message->id]);
    }

    /** @test */
    public function user_can_update_a_message()
    {
        Event::fake();

        $project = factory(\App\Models\Project::class)->create(['owner_id' => $this->user->id]);

        $message = Message::create([
            'body'             => 'New Message',
            'user_id'          => $this->user->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        $this->actingAs($this->user)
            ->put("messages/{$message->id}", ['message' => 'Updated Message']);

        $this->assertDatabaseHas('messages', [
            'body'             => 'Updated Message',
            'user_id'          => $this->user->id,
            'messageable_type' => 'project',
            'messageable_id'   => $project->id,
        ]);

        Event::assertDispatched(MessageUpdated::class, function ($e) use ($message) {
            return $e->message->id === $message->id;
        });
    }
}
