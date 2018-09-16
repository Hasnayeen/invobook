<?php

namespace Tests\Feature;

use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthorizationTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory('App\Models\User')->create([
            'role' => 2,
        ]);
        Role::create(['name' => 'admin']);
    }

    /** @test */
    public function admin_can_create_new_role()
    {
        $this->user->assignRole('admin');
        $response = $this->actingAs($this->user)->post('admin/roles', ['name' => 'staff']);
        $response->assertJsonFragment([
            'status'  => 'success',
            'message' => 'New role has been created',
            'name'    => 'staff',
        ]);
    }

    /** @test */
    public function owner_can_delete_role()
    {
        $role = Role::create(['name' => 'owner']);
        $permission = Permission::create(['name' => 'delete role']);
        $role->givePermissionTo($permission);
        $this->user->assignRole($role);
        $role2 = Role::create(['name' => 'delete']);
        $response = $this->actingAs($this->user)->delete('admin/roles/' . $role->id);
        $response->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Role has been deleted',
        ]);
    }

    /** @test */
    public function owner_can_revoke_permission_from_role()
    {
        $role = Role::create(['name' => 'owner']);
        $permission = Permission::create(['name' => 'revoke permission']);
        $role->givePermissionTo($permission);
        $role2 = Role::create(['name' => 'guest']);
        $permission2 = Permission::create(['name' => 'view project']);
        $role2->givePermissionTo($permission2);
        $this->user->assignRole('owner');
        $response = $this->actingAs($this->user)->delete('admin/roles/' . $role2->id . '/permissions', ['permission_id' => $permission2->id]);
        $response->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been revoked from the role',
        ]);
    }

    /** @test */
    public function owner_can_assign_permission_to_role()
    {
        $role = Role::create(['name' => 'owner']);
        $this->user->assignRole('owner');
        $permission = Permission::create(['name' => 'assign permission']);
        $role->givePermissionTo($permission);
        $role1 = Role::create(['name' => 'staff']);
        $permission1 = Permission::create(['name' => 'view projects']);
        $response = $this->actingAs($this->user)->post('admin/roles/' . $role1->id . '/permissions', ['permission_id' => $permission1->id]);
        $response->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been assigned to the role',
            'name'    => 'view projects',
        ]);
        $this->assertDatabaseHas('role_has_permissions', ['role_id' => $role1->id, 'permission_id' => $permission1->id]);
    }

    /** @test */
    public function owner_can_see_all_permissions()
    {
        $role = Role::create(['name' => 'owner']);
        $this->user->assignRole('owner');
        $permission = Permission::create(['name' => 'view permissions']);
        $role->givePermissionTo($permission);

        Permission::create(['name' => 'view projects']);
        Permission::create(['name' => 'edit projects']);
        Permission::create(['name' => 'delete projects']);

        $response = $this->actingAs($this->user)->get('admin/permissions');
        $response->assertJsonFragment([
            'status' => 'success',
            'name'   => 'view projects',
            'name'   => 'edit projects',
            'name'   => 'delete projects',
            'name'   => 'view permissions',
        ]);
    }
}
