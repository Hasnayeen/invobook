<?php

namespace Database\Seeders;

use Carbon\Carbon;
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
        $now = Carbon::now();

        $permissions = PermissionSetting::where('group_related', false)->get();
        RoleHasPermission::insert($permissions->map(function ($item, $key) use ($now) {
            return [
                'role_id'       => $item->role_id,
                'permission_id' => $item->permission_id,
                'created_at'    => $now,
                'updated_at'    => $now,
            ];
        })->toArray());
    }
}
