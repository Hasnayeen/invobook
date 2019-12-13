<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Category;
use Illuminate\Auth\AuthenticationException;

class CategoryTest extends TestCase
{
    /** @test */
    public function user_can_get_all_categories()
    {
        $categories = factory(Category::class, 3)->create();

        $this->actingAs($this->user)->get('categories')
            ->assertJsonFragment([
                'status' => 'success',
                'name'   => $categories[0]->name,
                'name'   => $categories[1]->name,
                'name'   => $categories[2]->name,
            ]);
    }

    /** @test */
    public function authenticated_user_can_create_a_category()
    {
        $category = factory(Category::class)->make();

        $this->actingAs($this->user)
            ->post('/categories', $category->toArray());

        $this->assertDatabaseHas('categories', $category->toArray());
    }

    /** @test */
    public function guest_user_cant_create_a_category()
    {
        $this->expectException(AuthenticationException::class);

        $this->post('/categories');
    }
}
