<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Role;
use App\Base\Models\Permission;
use App\Base\Exceptions\OwnerPermissionCantBeRevoked;

class AuthorizationTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->role = Role::where(['slug' => 'guest'])->first();
        $this->permission = Permission::where(['action' => 'view', 'resource' => 'project'])->first();
    }

    /** @test */
    public function owner_can_revoke_permission_from_role()
    {
        $this->actingAs($this->user)->delete('admin/roles/' . $this->role->id . '/permissions/' . $this->permission->id)
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been revoked from the role',
        ]);

        $this->assertDatabaseMissing('permission_settings', ['permission_id' => $this->permission->id, 'role_id' => $this->role->id]);
        $this->assertDatabaseMissing('role_has_permission', ['role_id' => $this->role->id, 'permission_id' => $this->permission->id]);
    }

    /** @test */
    public function owner_can_assign_permission_to_role()
    {
        $this->owner_can_revoke_permission_from_role();
        $this->actingAs($this->user)->post('admin/roles/' . $this->role->id . '/permissions/' . $this->permission->id)
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been assigned to the role',
        ]);

        $this->assertDatabaseHas('permission_settings', ['role_id' => $this->role->id, 'permission_id' => $this->permission->id]);
        $this->assertDatabaseHas('role_has_permission', ['role_id' => $this->role->id, 'permission_id' => $this->permission->id]);
    }

    /** @test */
    public function owner_can_see_all_permissions()
    {
        $this->actingAs($this->user)->get('admin/permissions')
        ->assertJsonFragment([
            'status'   => 'success',
            'action'   => 'view',
            'action'   => 'edit',
            'action'   => 'delete',
            'resource' => 'project',
        ]);
    }

    /** @test */
    public function owner_permission_cannot_be_revoked()
    {
        $this->expectException(OwnerPermissionCantBeRevoked::class);
        $ownerRole = Role::where(['slug' => 'owner'])->first();
        $this->actingAs($this->user)->delete('admin/roles/' . $ownerRole->id . '/permissions/' . $this->permission->id)
            ->assertForbidden();
    }
}
