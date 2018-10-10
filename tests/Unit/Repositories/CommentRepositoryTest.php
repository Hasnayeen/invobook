<?php

namespace Tests\Unit\Repositories;

use Tests\TestCase;
use App\Models\Comment;
use App\Repositories\CommentRepository;

class CommentRepositoryTest extends TestCase
{
    /**
     * @var CommentRepository
     */
    private $repository;

    public function setUp()
    {
        parent::setUp();

        $this->repository = new CommentRepository(new Comment);
    }

    /**
     * @test
     */
    public function it_stores_comment()
    {
        $data = [
            'discussion_id' => 10,
            'user_id'       => 20,
            'body'          => 'Testing Comment',
        ];

        /** @var Comment $comment */
        $comment = $this->repository->create($data);

        array_walk($data, function ($value, $key) use ($comment) {
            $this->assertEquals($value, $comment->$key);
        });

        $this->assertDatabaseHas('comments', ['id' => $comment->id]);
    }
}
