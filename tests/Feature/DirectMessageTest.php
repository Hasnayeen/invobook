<?php

namespace Tests\Feature;

use Tests\TestCase;

class DirectMessageTest extends TestCase
{
    /** @test */
    public function user_can_read_direct_message_sent_by_other_user()
    {
        $user = factory(\App\Core\Models\User::class)->create();
        $messages = factory(\App\Core\Models\Message::class, 5)->create([
            'user_id'          => $this->user->id,
            'messageable_type' => 'user',
            'messageable_id'   => $user->id,
        ]);
        $this->actingAs($this->user)
             ->call('GET', '/direct-messages', [
                 'resource_type' => 'user',
                 'resource_id'   => $user->id,
             ])
             ->assertJsonFragment([
                 'status' => 'success',
                 'total'  => 5,
                 'body'   => $messages[0]['body'],
             ])
             ->assertJsonFragment([
                 'body' => $messages[1]['body'],
             ])
             ->assertJsonFragment([
                 'body' => $messages[2]['body'],
             ])
             ->assertJsonFragment([
                 'body' => $messages[3]['body'],
             ])
             ->assertJsonFragment([
                 'body' => $messages[4]['body'],
             ]);
    }
}
