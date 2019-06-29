<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\User;
use App\Core\Models\DirectMessage;
use Illuminate\Support\Facades\Event;

class DirectMessageTest extends TestCase
{
    /** @test */
    public function user_can_read_direct_message_sent_by_other_user()
    {
        Event::fake();
        $user = factory(User::class)->create();
        $messages = factory(DirectMessage::class, 5)->create([
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

    /** @test */
    public function user_can_get_users_with_unread_message()
    {
        $john = factory(User::class)->create();
        factory(DirectMessage::class)->create(['sender_id' => $john->id, 'receiver_id' => $this->user->id, 'read_at' => null]);
        $this->actingAs($this->user)
             ->get('unread-direct-messages/users')
             ->assertJsonFragment([
                 'status'                              => 'success',
                 'id'                                  => $john->id,
                 'name'                                => $john->name,
                 'unread_messages_for_auth_user_count' => '1',
             ]);
    }

    /** @test */
    public function when_user_read_unread_message_update_record()
    {
        $john = factory(User::class)->create();
        factory(DirectMessage::class)->create(['sender_id' => $john->id, 'receiver_id' => $this->user->id, 'read_at' => null]);
        $this->actingAs($this->user)
             ->put('unread-direct-messages/' . $john->id)
             ->assertJsonFragment([
                 'status' => 'success',
             ]);

        $this->assertDatabaseMissing('direct_messages', ['receiver_id' => auth()->user()->id, 'sender_id' => $john->id, 'read_at' => null]);
    }
}
