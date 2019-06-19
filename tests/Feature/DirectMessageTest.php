<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Event;

class DirectMessageTest extends TestCase
{
    /** @test */
    public function user_can_read_direct_message_sent_by_other_user()
    {
        Event::fake();
        $user = factory(\App\Core\Models\User::class)->create();
        $messages = factory(\App\Core\Models\DirectMessage::class, 5)->create([
            'sender_id'   => $this->user->id,
            'receiver_id' => $user->id,
        ]);
        $this->actingAs($this->user)
             ->call('GET', '/direct-messages', [
                 'receiver_id' => $user->id,
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
