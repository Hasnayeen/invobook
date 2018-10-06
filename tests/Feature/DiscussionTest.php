<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DiscussionTest extends TestCase
{
    use DatabaseTransactions;

    /** @test **/
    public function discussions_have_a_category()
    {
        // Given we have a category
        $category = factory(\App\Models\Category::class)->create(['name' => 'Fake category']);
        
        // When we create a discussion, belonging to this category
        $discussion = factory(\App\Models\Discussion::class)->create(['category_id' => $category->id]);

        // we expect to get the proper category name via its relational accessor
        $this->assertEquals('Fake category', $discussion->category->name);
    }
}
