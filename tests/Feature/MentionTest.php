<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Task;
use App\Core\Models\User;
use App\Core\Models\Comment;
use App\Core\Models\Message;
use Illuminate\Support\Facades\Mail;
use App\Core\Notifications\YouWereMentioned;
use Illuminate\Support\Facades\Notification;

class MentionTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        Mail::fake();
        $this->user2 = factory(User::class)->create(['role_id' => 2]);
        $this->user3 = factory(User::class)->create(['role_id' => 2]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_comment()
    {
        $comment = factory(Comment::class)->make();
        $this->actingAs($this->user)->post('comments', [
            'body'             => $comment->body,
            'commentable_type' => $comment->commentable_type,
            'commentable_id'   => $comment->commentable_id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user2->username, 'mentionable_type' => 'comment', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user3->username, 'mentionable_type' => 'comment', 'mentionable_id' => 1]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_task()
    {
        $project = factory(\App\Core\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $task = factory(Task::class)->make([
            'group_type' => 'project',
            'group_id'   => $project->id,
        ]);
        $this->actingAs($this->user);
        resolve('Authorization')->setDefaultPermissions($project);
        $project->members()->save($this->user);
        $project->members()->save($this->user2);
        $project->members()->save($this->user3);

        $this->post('tasks', [
            'name'             => $task->name,
            'assigned_to'      => $task->assigned_to,
            'notes'            => $task->notes,
            'due_on'           => $task->due_on,
            'group_type'       => 'project',
            'group_id'         => $project->id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user2->username, 'mentionable_type' => 'task', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user3->username, 'mentionable_type' => 'task', 'mentionable_id' => 1]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_message()
    {
        $message = factory(Message::class)->make();

        $this->actingAs($this->user)->post('messages', [
            'message'          => $message->body,
            'resource_type'    => $message->messageable_type,
            'resource_id'      => $message->messageable_id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user2->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user3->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_comment()
    {
        Notification::fake();

        $comment = factory(Comment::class)->make();

        $this->actingAs($this->user)->post('comments', [
            'body'             => $comment->body,
            'commentable_type' => $comment->commentable_type,
            'commentable_id'   => $comment->commentable_id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);

        Notification::assertSentTo([$this->user2, $this->user3], YouWereMentioned::class, function ($notification) {
            $mailData = $notification->toMail($this->user2)->toArray();

            $this->assertEquals($this->user->name . ' mentioned you in comment.', $mailData['subject']);

            return true;
        });
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_task()
    {
        Notification::fake();

        $this->user_can_mention_other_user_when_creating_task();

        Notification::assertSentTo([$this->user2, $this->user3], YouWereMentioned::class, function ($notification) {
            $mailData = $notification->toMail($this->user2)->toArray();

            $this->assertEquals($this->user->name . ' mentioned you in task.', $mailData['subject']);

            return true;
        });
    }

    /** @test */
    public function send_notification_to_mentioned_user_in_message()
    {
        Notification::fake();
        $message = factory(Message::class)->make();

        $this->actingAs($this->user)->post('messages', [
            'message'          => $message->body,
            'resource_type'    => $message->messageable_type,
            'resource_id'      => $message->messageable_id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);

        Notification::assertSentTo([$this->user2, $this->user3], YouWereMentioned::class, function ($notification) {
            $mailData = $notification->toMail($this->user2)->toArray();

            $this->assertEquals($this->user->name . ' mentioned you in message.', $mailData['subject']);

            return true;
        });
    }
}
