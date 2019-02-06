<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Discussion;
use Spatie\Permission\Models\Permission;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;

class CommentTest extends TestCase
{
    /**
     * @var string
     */
    private static $endpoint = '/comments';

    public function setUp()
    {
        parent::setUp();
    }

    /** @test */
    public function user_can_create_comment()
    {
        factory(Discussion::class)->create(['id' => 1]);
        $this->actingAs($this->user);

        $response = $this->post(
            self::$endpoint,
            [
                'body'             => 'Comment body',
                'commentable_type' => 'discussion',
                'commentable_id'   => 1,
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
        $discussion = factory(\App\Models\Discussion::class)->create();
        $comments = factory(\App\Models\Comment::class, 3)->create(['commentable_type' => 'discussion', 'commentable_id' => $discussion->id]);

        $this->actingAs($this->user)->call('GET', self::$endpoint, ['commentable_type' => 'discussion', 'commentable_id' => $discussion->id])
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
        $user = factory(\App\Models\User::class)->create();

        $comment = factory(\App\Models\Comment::class)->create([
            'user_id'          => $user->id,
            'body'             => 'Comment body',
            'commentable_type' => 'task',
            'commentable_id'   => 1,
        ]);

        $this->actingAs($user)->delete("/comments/{$comment->id}")
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'misc.Comment has been deleted',
             ]);
    }

    /** @test */
    public function user_with_permission_can_delete_a_comment()
    {
        $comment = factory(\App\Models\Comment::class)->create();

        $permission = Permission::create(['name' => 'delete comment.' . $comment->commentable_type . '->' . $comment->commentable_id]);

        $this->user->givePermissionTo($permission);

        $this->actingAs($this->user)->delete("/comments/{$comment->id}")
             ->assertJsonFragment([
                'status'  => 'success',
                'message' => 'misc.Comment has been deleted',
             ]);
    }

    /**
     * @expectedException Illuminate\Auth\Access\AuthorizationException
     * @test
     */
    public function user_without_permission_cant_delete_a_comment()
    {
        $comment = factory(\App\Models\Comment::class)->create();

        Permission::create(['name' => 'delete comment.' . $comment->commentable_type . '->' . $comment->commentable_id]);

        $this->actingAs($this->user)->delete("/comments/{$comment->id}");
    }
}
