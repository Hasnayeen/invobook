<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Notification;
use App\TaskManager\Notifications\TaskStatusUpdated;
use Illuminate\Support\Facades\Notification as FakeNotification;

class NotificationTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->notifications = factory(Notification::class, 3)->create(['notifiable_id' => $this->user->id]);
        $this->task = factory(\App\TaskManager\Models\Task::class)->create(['created_by' => $this->user->id]);
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

    /** @test */
    public function when_task_status_changed_a_notification_should_be_sent_to_the_creator_of_the_task()
    {
        FakeNotification::fake();

        $this->user->notify(new TaskStatusUpdated($this->task, $this->user));

        FakeNotification::assertSentTo($this->user, TaskStatusUpdated::class);
    }
}
