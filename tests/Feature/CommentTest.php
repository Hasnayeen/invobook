<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Discussion\Models\Discussion;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Access\AuthorizationException;

class CommentTest extends TestCase
{
    /**
     * @var string
     */
    private static $endpoint = '/comments';

    /** @test */
    public function user_can_create_comment()
    {
        $this->actingAs($this->user);
        $discussion = factory(Discussion::class)->create();

        $response = $this->post(
            self::$endpoint,
            [
                'body'             => 'Comment body',
                'commentable_id'   => $discussion->id,
                'commentable_type' => 'discussion',
                'group_type'       => $discussion->discussionable_type,
                'group_id'         => $discussion->discussionable_id,
            ]
        );

        $response->assertStatus(201);
        $response->assertJson([
            'status'  => 'success',
            'message' => 'Comment has been saved',
            'comment' => [
                'commentable_id'   => 1,
                'commentable_type' => 'discussion',
                'user_id'          => $this->user->id,
                'body'             => 'Comment body',
            ],
        ]);

        $this->assertDatabaseHas('comments', ['commentable_id' => 1, 'commentable_type' => 'discussion', 'body' => 'Comment body', 'user_id' => $this->user->id]);
    }

    /** @test */
    public function guest_can_not_create_comment()
    {
        $this->expectException(AuthenticationException::class, 'Unauthenticated');

        $this->post(
            self::$endpoint,
            [
                'body'             => 'Comment body',
                'commentable_type' => 'discussion',
                'commentable_id'   => 1,
            ]
        );
    }

    /** @test */
    public function user_can_not_create_comment_for_non_existing_commentable_resource()
    {
        $this->actingAs($this->user);

        $this->expectException(ValidationException::class);
        $response = $this->post(
            str_replace('1', '999', self::$endpoint),
            [
                'body'             => 'Comment body',
                'commentable_type' => 'discussion',
                'commentable_id'   => 1,
            ]
        );

        $response->assertStatus(404);
    }

    /** @test */
    public function body_attribute_is_required()
    {
        $this->actingAs($this->user);

        $this->expectException(ValidationException::class);

        $this->post(
            self::$endpoint,
            []
        );
    }

    /** @test */
    public function user_can_see_all_comment()
    {
        $this->actingAs($this->user);
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        resolve('Authorization')->setupDefaultPermissions($project);
        $discussion = factory(\App\Discussion\Models\Discussion::class)->create(['discussionable_type' => 'project', 'discussionable_id' => $project->id]);
        $comments = factory(\App\Base\Models\Comment::class, 3)->create(['commentable_type' => 'discussion', 'commentable_id' => $discussion->id]);

        $this->call('GET', self::$endpoint, [
                'commentable_type' => 'discussion',
                'commentable_id'   => $discussion->id,
                'group_type'       => 'project',
                'group_id'         => $project->id,
            ])
             ->assertJsonFragment([
                 'status'           => 'success',
                 'body'             => $comments[0]->body,
                 'body'             => $comments[1]->body,
                 'body'             => $comments[2]->body,
                 'commentable_type' => 'discussion',
                 'commentable_id'   => $discussion->id,
             ]);
    }

    /** @test */
    public function user_can_delete_his_own_comment()
    {
        $user = factory(\App\Base\Models\User::class)->create();

        $this->actingAs($user);
        $comment = factory(\App\Base\Models\Comment::class)->create([
            'user_id'          => $user->id,
            'body'             => 'Comment body',
            'commentable_type' => 'task',
            'commentable_id'   => 1,
        ]);

        $this->delete("/comments/{$comment->id}")
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Comment has been deleted',
             ]);
    }

    /**
     * @test
     * */
    public function user_with_permission_can_delete_a_comment()
    {
        Notification::fake();
        $project = factory(\App\Project\Models\Project::class)->create(['owner_id' => $this->user->id]);
        $this->actingAs($this->user);
        resolve('Authorization')->setupDefaultPermissions($project);
        $comment = factory(\App\Base\Models\Comment::class)->create([
            'commentable_type' => 'task',
            'commentable_id'   => factory(\App\TaskManager\Models\Task::class)->create([
                'taskable_type' => 'project',
                'taskable_id'   => $project->id,
            ]),
        ]);

        $this->post('members', [
            'user_id'       => $this->user->id,
            'group_type'    => $comment->commentable->taskable_type,
            'group_id'      => $comment->commentable->taskable_id,
        ]);

        $this->actingAs($this->user)
             ->delete(
                 "/comments/{$comment->id}",
                 ['group_type' => $comment->commentable->taskable_type, 'group_id' => $comment->commentable->taskable_id]
             )
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'Comment has been deleted',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_delete_a_comment()
    {
        $this->expectException(AuthorizationException::class);
        $this->actingAs($this->user);
        $comment = factory(\App\Base\Models\Comment::class)->create([
            'commentable_type' => 'task',
            'commentable_id'   => factory(\App\TaskManager\Models\Task::class),
        ]);

        $this->delete(
            "/comments/{$comment->id}",
            ['group_type' => $comment->commentable->taskable_type, 'group_id' => $comment->commentable->taskable_id]
        );
    }
}
