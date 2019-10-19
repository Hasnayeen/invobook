<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Notification;

class NotificationTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->notifications = factory(Notification::class, 3)->create(['notifiable_id' => $this->user->id]);
    }

    /** @test */
    public function user_can_see_all_notifications()
    {
        $this->actingAs($this->user)->get('notifications')
             ->assertJsonFragment([
                 'status'          => 'success',
                 'notifiable_type' => 'user',
                 'notifiable_id'   => $this->user->id,
                 'data'            => $this->notifications[0]->data,
                 'data'            => $this->notifications[1]->data,
                 'data'            => $this->notifications[2]->data,
             ]);
    }

    /** @test */
    public function notifications_should_be_marked_as_read_when_user_seen_them()
    {
        $this->actingAs($this->user)->put('notifications')
            ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Notifications are marked as read',
            ]);

        $this->assertDatabaseMissing('notifications', ['id' => $this->notifications[0]->id, 'read_at' => null]);
        $this->assertDatabaseMissing('notifications', ['id' => $this->notifications[1]->id, 'read_at' => null]);
        $this->assertDatabaseMissing('notifications', ['id' => $this->notifications[2]->id, 'read_at' => null]);
    }
}
