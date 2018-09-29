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
        Role::create(['name' => 'admin']);
    }

    /** @test */
    public function owner_can_create_new_role()
    {
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
        $role1 = Role::create(['name' => 'staff']);
        $permission1 = Permission::create(['name' => 'new permission']);
        $this->actingAs($this->user)->post('admin/roles/' . $role1->id . '/permissions', ['permission_id' => $permission1->id])
        ->assertJsonFragment([
            'status'  => 'success',
            'message' => 'Permission has been assigned to the role',
            'name'    => 'new permission',
        ]);
        $this->assertDatabaseHas('role_has_permissions', ['role_id' => $role1->id, 'permission_id' => $permission1->id]);
    }

    /** @test */
    public function owner_can_see_all_permissions()
    {
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
        $this->actingAs($this->user)->delete('admin/roles/' . $this->ownerRole->id)
            ->assertForbidden();
    }
}
