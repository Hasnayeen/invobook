<?php

namespace Tests\Unit;

use Tests\TestCase;

class DiscussionTest extends TestCase
{
    protected $discussion;

    public function setUp(): void
    {
        parent::setUp();
        $this->actingAs($this->user);
        $this->discussion = factory(\App\Discussion\Models\Discussion::class)->create();
    }

    /** @test */
    public function discussion_belongs_to_a_creator()
    {
        $this->assertInstanceOf(\App\Base\Models\User::class, $this->discussion->creator);
    }

    /** @test **/
    public function discussions_belongs_to_a_category()
    {
        $this->assertInstanceOf(\App\Base\Models\Category::class, $this->discussion->category);
    }
}
