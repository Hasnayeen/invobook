<?php

namespace Tests\Feature;

use App\Models\Discussion;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;

class CommentTest extends TestCase
{
    /**
     * @var string
     */
    private static $endpoint = '/discussions/1/comments';

    public function setUp()
    {
        parent::setUp();
        factory(Discussion::class)->create(['id' => 1]);
    }

    /**
     * @test
     */
    public function user_can_create_comment()
    {
        $this->actingAs(factory(User::class)->create());

        $response = $this->post(
            self::$endpoint,
            ['body' => 'Comment body']
        );

        $response->assertStatus(201);
        $response->assertJson([
            'status' => 'success',
            'comment' => [
                'discussion_id' => 1,
                'body' => 'Comment body'
            ]
        ]);

        $this->assertDatabaseHas('comments', ['discussion_id' => 1, 'body' => 'Comment body']);
    }

    /**
     * @test
     */
    public function guest_can_not_create_comment()
    {
        $this->expectException(AuthenticationException::class, 'Unauthenticated');

        $this->post(
            self::$endpoint,
            ['body' => 'Comment body']
        );
    }

    /**
     * @test
     */
    public function user_can_not_create_comment_for_not_existing_discussion()
    {
        $this->actingAs(factory(User::class)->create());

        $this->expectException(ModelNotFoundException::class);
        $response = $this->post(
            str_replace('1', '999', self::$endpoint),
            ['body' => 'Comment body']
        );

        $response->assertStatus(404);
    }

    /**
     * @test
     */
    public function body_attribute_is_required()
    {
        $this->actingAs(factory(User::class)->create());

        $this->expectException(ValidationException::class);

        $this->post(
            self::$endpoint,
            []
        );
    }
}