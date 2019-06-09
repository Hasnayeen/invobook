<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\Role;
use App\Core\Models\Permission;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
