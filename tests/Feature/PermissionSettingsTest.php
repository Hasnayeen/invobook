<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\Permission;

class PermissionSettingsTest extends TestCase
{
    /** @test */
    public function get_permission_settings_for_a_role()
    {
        $permissions = Permission::all()->groupBy('resource');
        $response = $this->actingAs($this->user)
             ->get('admin/roles/1/permissions')
             ->assertJsonFragment([
                 'status' => 'success',
             ]);
        $this->assertCount($permissions->count(), $response->decodeResponseJson()['permissions']);
    }
}
