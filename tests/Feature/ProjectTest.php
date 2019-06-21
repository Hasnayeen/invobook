<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Project;
use App\Core\Exceptions\UserIsNotMember;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProjectTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->project = factory('App\Core\Models\Project')->create();
    }

    /** @test */
    public function projects_route_should_return_404_page()
    {
        $this->expectException(NotFoundHttpException::class);
        $this->actingAs($this->user)->get('offices/');
    }

    /** @test */
    public function user_with_permission_can_see_project_page()
    {
        $this->user_with_permission_can_create_project();
        $id = Project::where('name', 'New Project')->first()->id;

        $this->actingAs($this->user)->get('projects/' . $id)->assertSee('New Project');
    }

    /** @test */
    public function user_without_permission_cant_see_project_page()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);
        $this->user_with_permission_can_create_project();
        $id = Project::where('name', 'New Project')->first()->id;

        $this->actingAs($user)->get('projects/' . $id)->assertSee('New Project');
    }

    /** @test */
    public function user_with_permission_can_create_project()
    {
        $this->actingAs($this->user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
        ])->assertJsonFragment([
            'status' => 'success',
            'name'   => 'New Project',
        ]);
        $this->assertDatabaseHas('projects', ['name' => 'New Project', 'description' => 'Description for new project', 'owner_id' => $this->user->id]);
    }

    /** @test */
    public function user_without_permission_cant_create_project()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory('App\Core\Models\User')->create(['role_id' => 5]);

        $this->actingAs($user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
        ]);
    }

    /** @test */
    public function add_user_to_project()
    {
        Notification::fake();

        $user = factory('App\Core\Models\User')->create();
        $this->actingAs($this->user)->post('/members', [
            'user_id'       => $user->id,
            'group_type'    => 'project',
            'group_id'      => $this->project->id,
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

    /** @test */
    public function user_with_permission_can_delete_a_project()
    {
        $this->user_with_permission_can_create_project();

        $id = Project::where('name', 'New Project')->first()->id;

        $this->actingAs($this->user)->delete('/projects/' . $id)
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'The project has been deleted',
             ]);
    }

    /** @test */
    public function user_without_permission_cant_delete_a_project()
    {
        $this->expectException(AuthorizationException::class);
        $user = factory(\App\Core\Models\User::class)->create(['role_id' => 5]);

        $this->user_with_permission_can_create_project();

        $id = Project::where('name', 'New Project')->first()->id;

        $this->actingAs($user)->delete('projects/' . $id);
    }

    /** @test */
    public function remove_user_from_project()
    {
        $this->add_user_to_project();

        $this->assertCount(1, $this->project->members);

        $user = $this->project->members->first();

        $this->actingAs($this->user)->delete('/members', [
            'user_id'       => $user->id,
            'group_type'    => 'project',
            'group_id'      => $this->project->id,
        ])->assertJson([
            'status'  => 'success',
            'message' => 'User removed from the project',
            'user'    => [
                'id'       => $user->id,
                'name'     => $user->name,
                'username' => $user->username,
                'avatar'   => $user->avatar,
            ],
        ]);

        $this->assertEmpty($this->project->fresh()->members);
    }

    /** @test */
    public function cannot_remove_user_from_project_if_not_a_member()
    {
        $this->expectException(UserIsNotMember::class);

        $user = factory('App\Core\Models\User')->create();

        $this->actingAs($this->user)
             ->delete('/members', [
                 'user_id'       => $user->id,
                 'group_type'    => 'project',
                 'group_id'      => $this->project->id,
             ])->dump();
    }
}
