<?php

use Illuminate\Database\Seeder;
use App\Base\Models\PermissionSetting;
use App\Base\Models\RoleHasPermission;

class RoleHasPermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = PermissionSetting::where('group_related', false)->get();
        RoleHasPermission::insert($permissions->each(function ($item, $key) {
            unset($item->id);
            unset($item->group_related);
        })->toArray());
    }
}
