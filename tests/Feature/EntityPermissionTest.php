<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Project;
use App\Core\Models\Permission;
use App\Core\Models\RoleHasPermission;

class EntityPermissionTest extends TestCase
{
    /** @test */
    public function user_can_see_all_permission_settings_for_role_in_this_group()
    {
        $this->actingAs($this->user)->post('projects', [
            'name'        => 'New Project',
            'description' => 'Description for new project',
        ]);
        $id = Project::where('name', 'New Project')->first()->id;
        $permissions = Permission::where('group_related', true)->get()->groupBy('resource');

        $this->actingAs($this->user)
             ->call('GET', 'groups/permissions', [
                 'group_type' => 'project',
                 'group_id'   => $id,
                 'role_id'   => 3,
             ])
             ->assertJsonFragment([
                 'status' => 'success',
                 'action' => 'create',
                 'resource' => 'comment',
             ])
             ->assertJsonCount(6, 'permissions')
             ->assertJsonCount(4, 'permissions.comment')
             ->assertJsonCount(3, 'permissions.file');
    }
}
