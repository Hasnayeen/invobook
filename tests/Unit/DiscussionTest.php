<?php

namespace Tests\Unit;

use Tests\TestCase;

class DiscussionTest extends TestCase
{
    protected $discussion;

    public function setUp()
    {
        parent::setUp();
        $this->discussion = factory(\App\Models\Discussion::class)->create();
    }

    /** @test */
    public function discussion_belongs_to_a_creator()
    {
        $this->assertInstanceOf(\App\Models\User::class, $this->discussion->creator);
    }

    /** @test **/
    public function discussions_belongs_to_a_category()
    {
        $this->assertInstanceOf(\App\Models\Category::class, $this->discussion->category);
    }
}
