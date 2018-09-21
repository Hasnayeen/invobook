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
        $this->user = factory('App\Models\User')->create();
        $this->ownerRole = Role::create(['name' => 'owner', 'deletable' => false]);
        $permission = Permission::create(['name' => 'view admin page']);
        $this->ownerRole->givePermissionTo($permission);
        $this->user->assignRole($this->ownerRole);
        Role::create(['name' => 'admin']);
    }

    /** @test */
    public function owner_can_create_new_role()
    {
        $permission = Permission::create(['name' => 'create role']);
        $this->ownerRole->givePermissionTo($permission);
        $this->actingAs($this->user)->post('admin/roles', ['name' => 'staff'])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'New role has been created',
            'name'    => 'staff',
        ]);
    }

    /** @test */
    public function owner_can_delete_role()
    {
        $permission = Permission::create(['name' => 'delete role']);
        $this->ownerRole->givePermissionTo($permission);
        $role2 = Role::create(['name' => 'delete']);
        $this->actingAs($this->user)->delete('admin/roles/' . $role2->id)
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Role has been deleted',
        ]);
    }

    /** @test */
    public function owner_can_revoke_permission_from_role()
    {
        $permission = Permission::create(['name' => 'revoke permission']);
        $this->ownerRole->givePermissionTo($permission);
        $role2 = Role::create(['name' => 'guest']);
        $permission2 = Permission::create(['name' => 'view project']);
        $role2->givePermissionTo($permission2);
        $this->actingAs($this->user)->delete('admin/roles/' . $role2->id . '/permissions', ['permission_id' => $permission2->id])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been revoked from the role',
        ]);
    }

    /** @test */
    public function owner_can_assign_permission_to_role()
    {
        $permission = Permission::create(['name' => 'assign permission']);
        $this->ownerRole->givePermissionTo($permission);
        $role1 = Role::create(['name' => 'staff']);
        $permission1 = Permission::create(['name' => 'view projects']);
        $this->actingAs($this->user)->post('admin/roles/' . $role1->id . '/permissions', ['permission_id' => $permission1->id])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been assigned to the role',
            'name'    => 'view projects',
        ]);
        $this->assertDatabaseHas('role_has_permissions', ['role_id' => $role1->id, 'permission_id' => $permission1->id]);
    }

    /** @test */
    public function owner_can_see_all_permissions()
    {
        $permission = Permission::create(['name' => 'view permissions']);
        $this->ownerRole->givePermissionTo($permission);

        Permission::create(['name' => 'view projects']);
        Permission::create(['name' => 'edit projects']);
        Permission::create(['name' => 'delete projects']);

        $this->actingAs($this->user)->get('admin/permissions')
        ->assertJsonFragment([
            'status' => 'success',
            'name'   => 'view projects',
            'name'   => 'edit projects',
            'name'   => 'delete projects',
            'name'   => 'view permissions',
        ]);
    }

    /**
     * @test
     * @expectedException App\Exceptions\RoleCantBeDeleted
     * */
    public function owner_role_cannot_be_deleted()
    {
        $permission = Permission::create(['name' => 'delete role']);
        $this->ownerRole->givePermissionTo($permission);

        $this->actingAs($this->user)->delete('admin/roles/' . $this->ownerRole->id)
            ->assertForbidden();
    }
}
