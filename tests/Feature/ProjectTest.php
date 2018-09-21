<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create();
        $this->project = factory('App\Models\Project')->create();
        $this->ownerRole = Role::create(['name' => 'owner']);
    }

    /** @test */
    public function owner_can_create_project()
    {
        $permission = Permission::create(['name' => 'create project']);
        $this->ownerRole->givePermissionTo($permission);
        $this->user->assignRole($this->ownerRole);

        $this->actingAs($this->user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
            'owner_id'    => $this->user->id,
        ])->assertJsonFragment([
            'status' => 'success',
            'name'   => 'New Project',
            'slug'   => str_slug('New Project'),
        ]);
        $this->assertDatabaseHas('projects', ['name' => 'New Project', 'description' => 'Description for new project', 'owner_id' => $this->user->id]);
        $this->assertTrue($this->user->hasPermissionTo('view project->new-project'));
        $this->assertTrue($this->user->hasPermissionTo('edit project->new-project'));
        $this->assertTrue($this->user->hasPermissionTo('delete project->new-project'));
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
