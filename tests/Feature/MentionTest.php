<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Models\Comment;
use App\Base\Models\Message;
use App\TaskManager\Models\Task;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Event;
use App\Base\Notifications\YouWereMentioned;
use Illuminate\Support\Facades\Notification;

class MentionTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        Event::fake();
        Mail::fake();
        $this->user2 = factory(User::class)->create(['role_id' => 2]);
        $this->user3 = factory(User::class)->create(['role_id' => 2]);
    }

    /** @test */
    public function user_can_mention_other_user_when_creating_comment()
    {
        $this->actingAs($this->user);
        $comment = factory(Comment::class)->make();
        $this->post('comments', [
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
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $task = factory(Task::class)->make([
            'group_type' => 'project',
            'group_id'   => $project->id,
            // 'due_on'     => '2022-06-15', // let's see if the project survives three year
        ]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
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
        $id = $this->prepareDataForMessageTest();
        $this->actingAs($this->user)->post('messages', [
            'message'          => 'Test Message',
            'group_type'       => 'project',
            'group_id'         => $id,
            'mentions'         => [
                $this->user2->username, $this->user3->username,
            ],
        ]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user2->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
        $this->assertDatabaseHas('mentions', ['username' => $this->user3->username, 'mentionable_type' => 'message', 'mentionable_id' => 1]);
    }

    /** @test */
    public function user_can_mention_other_user_when_upating_message()
    {
        $message = factory(Message::class)->create([
            'user_id' => $this->user->id,
        ]);

        $this->actingAs($this->user)->put('messages/' . $message->id, [
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
        $this->actingAs($this->user);
        $comment = factory(Comment::class)->make();

        $this->post('comments', [
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
        $id = $this->prepareDataForMessageTest();
        $this->actingAs($this->user)->post('messages', [
            'message'          => 'Test Message',
            'group_type'       => 'project',
            'group_id'         => $id,
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

    private function prepareDataForMessageTest()
    {
        $project = factory('App\Project\Models\Project')->create(['owner_id' => $this->user->id]);
        $project->members()->attach($this->user);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);

        return $project->id;
    }
}
