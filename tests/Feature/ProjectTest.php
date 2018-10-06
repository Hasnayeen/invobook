<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;

class ProjectTest extends TestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->project = factory('App\Models\Project')->create();
    }

    /** @test */
    public function owner_can_create_project()
    {
        $this->actingAs($this->user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
            'owner_id'    => $this->user->id,
        ])->assertJsonFragment([
            'status' => 'success',
            'name'   => 'New Project',
        ]);
        $this->assertDatabaseHas('projects', ['name' => 'New Project', 'description' => 'Description for new project', 'owner_id' => $this->user->id]);

        $id = Project::where('name', 'New Project')->first()->id;
        $this->assertTrue($this->user->hasPermissionTo('view project->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('edit project->' . $id));
        $this->assertTrue($this->user->hasPermissionTo('delete project->' . $id));
    }

    /** @test */
    public function add_user_to_project()
    {
        $user = factory('App\Models\User')->create();
        $this->actingAs($this->user)->post('/members', [
            'user_id'       => $user->id,
            'resource_type' => 'project',
            'resource_id'   => $this->project->id,
        ])->assertJson([
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
