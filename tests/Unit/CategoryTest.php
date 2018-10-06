<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CategoryTest extends TestCase
{
    use DatabaseTransactions;

    /** @test **/
    public function a_category_has_a_name()
    {
        $category = factory(\App\Models\Category::class)->create(['name' => 'Fake category']);

        $this->assertEquals('Fake category', $category->name);
    }
}
