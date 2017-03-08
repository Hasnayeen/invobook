<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectListPageTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function getAllProjects()
    {
        $user = factory(User::class)->create();
        $projects = factory(Project::class, 10)->create();

        $response = $this->actingAs($user)
                           ->get('/projects');

        $response->assertStatus(200)
                 ->assertViewHas('projects', $projects->transform(function ($item) {
                     return [
                        'name'        => $item->name,
                        'description' => $item->description,
                    ];
                 })->toArray()
        );
    }
}
