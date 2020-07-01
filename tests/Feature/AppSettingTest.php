<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Base\Models\User;
use App\Base\Models\AppSetting;
use Illuminate\Foundation\Testing\WithFaker;

class AppSettingTest extends TestCase
{
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->appSetting = AppSetting::where(['resource' => 'project'])->first();
    }

    /** @test */
    public function owner_or_admin_can_update_app_settings_table()
    {
        $this->actingAs($this->user);
        resolve('Authorization')->userHasPermissionTo('update', 'app-settings');
        $this->patch('admin/app-settings/'. $this->appSetting->id, ['status' => false])->assertJsonFragment([
            'status'  => 'success',
            'message' => 'The App Setting has been updated',
        ]);
        $this->assertDatabaseHas('app_settings', ['resource' => 'project', 'status' => false]);
    }

    /** @test */
    public function user_without_permission_cant_update_app_setting_table()
    {
        $guest = factory(User::class)->create(['role_id' => 5]);
        $this->actingAs($guest);
        $this->patch('admin/app-settings/'. $this->appSetting->id, ['status' => false]);
        $this->assertDatabaseMissing('app_settings', ['resource' => 'project', 'status' => false]);
    }
}
