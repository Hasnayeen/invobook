<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->project = factory('App\Models\Project')->create();
    }

    /** @test */
    public function add_user_to_project()
    {
        $user = factory('App\Models\User')->create();
        $response = $this->actingAs($this->user)->post('/projects/' . $this->project->slug . '/members', ['user_id' => $user->id]);
        $response->assertJson([
            'status'  => 'success',
            'message' => 'User added to the project',
            'user'    => [
                'id'       => $user->id,
                'name'     => $user->name,
                'username' => $user->username,
                'avatar'   => $user->avatar,
            ],
        ]);
    }
}
