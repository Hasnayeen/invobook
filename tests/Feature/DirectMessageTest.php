<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Models\DirectMessage;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Access\AuthorizationException;

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
        Event::fake();
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
        Event::fake();
        $john = factory(User::class)->create();
        factory(DirectMessage::class)->create(['sender_id' => $john->id, 'receiver_id' => $this->user->id, 'read_at' => null]);
        $this->actingAs($this->user)
             ->put('unread-direct-messages/' . $john->id)
             ->assertJsonFragment([
                 'status' => 'success',
             ]);

        $this->assertDatabaseMissing('direct_messages', ['receiver_id' => auth()->user()->id, 'sender_id' => $john->id, 'read_at' => null]);
    }

    /** @test */
    public function user_can_delete_their_own_direct_message()
    {
        Event::fake();
        $john = factory(User::class)->create();
        $directMessage = factory(DirectMessage::class)->create(
            ['sender_id' => $this->user->id, 'receiver_id' => $john->id]
        );
        $this->actingAs($this->user)
             ->delete('/direct-messages/' . $directMessage->id)
             ->assertJsonFragment(
                 [
                     'status' => 'success',
                 ]
             );

        $this->assertDatabaseMissing('direct_messages', ['id' => $directMessage->id]);
    }

    /** @test */
    public function user_can_not_delete_direct_message_from_other_users()
    {
        $this->expectException(AuthorizationException::class);
        Event::fake();
        $john = factory(User::class)->create();
        $directMessage = factory(DirectMessage::class)->create(
            ['sender_id' => $john->id, 'receiver_id' => $this->user->id]
        );
        $this->actingAs($this->user)
             ->delete('/direct-messages/' . $directMessage->id);
    }

    /** @test */
    public function user_can_create_direct_message()
    {
        Event::fake();
        $john = factory(User::class)->create();
        $this->actingAs($this->user);
        $this->post('direct-messages/', [
            'body'           => 'New Message',
            'receiver_id'    => $john->id,
            'attachment_id'  => null,
            'read_at'        => null,
        ])
            ->assertJsonFragment([
            'status'      => 'success',
            'sender_id'   => $this->user->id,
            'receiver_id' => $john->id,
            'body'        => 'New Message',
        ]);
        $this->assertDatabaseHas('direct_messages', [
            'body'           => 'New Message',
            'sender_id'      => $this->user->id,
            'receiver_id'    => $john->id,
            'attachment_id'  => null,
            'read_at'        => null,
        ]);
    }
}
