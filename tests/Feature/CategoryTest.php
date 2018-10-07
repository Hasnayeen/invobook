<?php

namespace Tests\Feature;

use Tests\TestCase;

class CategoryTest extends TestCase
{
    /** @test */
    public function user_can_get_all_categories()
    {
        $categories = factory(\App\Models\Category::class, 3)->create();

        $this->actingAs($this->user)->get('categories')
            ->assertJsonFragment([
                'status' => 'success',
                'name'   => $categories[0]->name,
                'name'   => $categories[1]->name,
                'name'   => $categories[2]->name,
            ]);
    }
}
