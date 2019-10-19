<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Models\Permission;
use App\Project\Models\Project;

class GroupPermissionTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->actingAs($this->user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
        ]);
        $this->projectId = Project::where('name', 'New Project')->first()->id;
    }

    /** @test */
    public function user_can_see_all_permission_settings_for_role_in_this_group()
    {
        $this->actingAs($this->user)
             ->call('GET', 'groups/permissions', [
                 'group_type' => 'project',
                 'group_id'   => $this->projectId,
                 'role_id'    => 3,
             ])
             ->assertJsonFragment([
                 'status'   => 'success',
                 'action'   => 'create',
                 'resource' => 'comment',
             ])
             ->assertJsonCount(7, 'permissions')
             ->assertJsonCount(4, 'permissions.comment')
             ->assertJsonCount(3, 'permissions.file');
    }

    /** @test */
    public function admin_can_give_permission_to_user()
    {
        $user = factory(User::class)->create(['role_id' => 5]);
        $permission = Permission::where(['action' => 'create', 'resource' => 'task'])->first();

        $this->actingAs($this->user)
             ->post('groups/permissions/' . $permission->id . '/roles/5', [
                 'group_type' => 'project',
                 'group_id'   => $this->projectId,
             ])
             ->assertJsonFragment([
                 'status'    => 'success',
                 'message'   => 'Permission has been assigned to the role',
                 'action'    => 'create',
                 'resource'  => 'task',
             ]);

        $this->assertDatabaseHas('role_has_permission', ['role_id' => 5, 'permission_id' => $permission->id, 'group_type' => 'project', 'group_id' => $this->projectId]);
    }

    /** @test */
    public function admin_can_revoke_permission_from_user()
    {
        $user = factory(User::class)->create(['role_id' => 5]);
        $permission = Permission::where(['action' => 'create', 'resource' => 'task'])->first();
        $user->role->permissions()->attach($permission->id, ['group_type' => 'project', 'group_id' => $this->projectId]);

        $this->actingAs($this->user)
             ->delete('groups/permissions/' . $permission->id . '/roles/5', [
                 'group_type' => 'project',
                 'group_id'   => $this->projectId,
             ])
             ->assertJsonFragment([
                 'status'    => 'success',
                 'message'   => 'Permission has been revoked from the role',
             ]);

        $this->assertDatabaseMissing('role_has_permission', ['role_id' => 5, 'permission_id' => $permission->id, 'group_type' => 'project', 'group_id' => $this->projectId]);
    }
}
