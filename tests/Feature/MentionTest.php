<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Task;
use App\Models\User;
use App\Models\Comment;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;
use App\Notifications\YouWereMentioned;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Notification;

class MentionTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        Mail::fake();
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_comment()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $comment = factory(Comment::class)->make();
        $response = $this->actingAs($this->user)->post('comments', [
            'body'             => $comment->body,
            'commentable_type' => $comment->commentable_type,
            'commentable_id'   => $comment->commentable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $user->username, 'mentionable_type' => 'comment', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $user2->username, 'mentionable_type' => 'comment', 'mentionable_id' => 1]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_task()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $task = factory(Task::class)->make();

        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $this->user->givePermissionTo($permission);

        $response = $this->actingAs($this->user)->post('tasks', [
            'name'             => $task->name,
            'assigned_to'      => $task->assigned_to,
            'notes'            => $task->notes,
            'due_on'           => $task->due_on,
            'taskable_type'    => $task->taskable_type,
            'taskable_id'      => $task->taskable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $user->username, 'mentionable_type' => 'task', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $user2->username, 'mentionable_type' => 'task', 'mentionable_id' => 1]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_message()
    {
        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $message = factory(Message::class)->make();

        $response = $this->actingAs($this->user)->post('messages', [
            'message'          => $message->body,
            'resource_type'    => $message->messageable_type,
            'resource_id'      => $message->messageable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $user->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $user2->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_comment()
    {
        Notification::fake();

        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $comment = factory(Comment::class)->make();

        $this->actingAs($this->user)->post('comments', [
            'body'             => $comment->body,
            'commentable_type' => $comment->commentable_type,
            'commentable_id'   => $comment->commentable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);

        Notification::assertSentTo([$user, $user2], YouWereMentioned::class, function ($notification) use ($user) {
            $mailData = $notification->toMail($user)->toArray();

            $this->assertEquals(auth()->user()->username . ' mentioned you in comment.', $mailData['subject']);

            return true;
        });
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_task()
    {
        Notification::fake();

        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $task = factory(Task::class)->make();

        $permission = Permission::create(['name' => 'create task.' . $task->taskable_type . '->' . $task->taskable_id]);
        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->post('tasks', [
            'name'             => $task->name,
            'assigned_to'      => $task->assigned_to,
            'notes'            => $task->notes,
            'due_on'           => $task->due_on,
            'taskable_type'    => $task->taskable_type,
            'taskable_id'      => $task->taskable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);

        Notification::assertSentTo([$user, $user2], YouWereMentioned::class, function ($notification) use ($user) {
            $mailData = $notification->toMail($user)->toArray();

            $this->assertEquals(auth()->user()->username . ' mentioned you in task.', $mailData['subject']);

            return true;
        });
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_message()
    {
        Notification::fake();

        $user = factory(User::class)->create();
        $user2 = factory(User::class)->create();
        $message = factory(Message::class)->make();

        $this->actingAs($this->user)->post('messages', [
            'message'          => $message->body,
            'resource_type'    => $message->messageable_type,
            'resource_id'      => $message->messageable_id,
            'mentions'         => [
                $user->username, $user2->username,
            ],
        ]);

        Notification::assertSentTo([$user, $user2], YouWereMentioned::class, function ($notification) use ($user) {
            $mailData = $notification->toMail($user)->toArray();

            $this->assertEquals(auth()->user()->username . ' mentioned you in message.', $mailData['subject']);

            return true;
        });
    }
}
