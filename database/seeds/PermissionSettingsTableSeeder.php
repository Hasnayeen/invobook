<?php

use Carbon\Carbon;
use App\Base\Models\Permission;
use Illuminate\Database\Seeder;
use App\Base\Models\PermissionSetting;

class PermissionSettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        /**
         * Default Permission Settings for Owner role.
         * */
        $permissions = Permission::all();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 1,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        /**
         * Default Permission Settings for Admin role.
         * */
        $permissions = Permission::where('resource', '!=', 'user')
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 2,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        /**
         * Default Permission Settings for Member role.
         * */
        $permissions = Permission::where('resource', '!=', 'user')
                                 ->where('resource', '!=', 'admin')
                                 ->where('resource', '!=', 'project')
                                 ->where('resource', '!=', 'team')
                                 ->where('resource', '!=', 'office')
                                 ->where('resource', '!=', 'cycle')
                                 ->where('resource', '!=', 'member')
                                 ->where('resource', '!=', 'permission')
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 3,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        $permissions = Permission::where('action', 'view')
                                 ->where(function ($query) {
                                     $query->where('resource', 'project')
                                           ->orWhere('resource', 'team')
                                           ->orWhere('resource', 'office');
                                 })
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 3,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        /**
         * Default Permission Settings for Client role.
         * */
        $permissions = Permission::where('action', 'view')
                                 ->where('resource', '!=', 'team')
                                 ->where('resource', '!=', 'office')
                                 ->where('resource', '!=', 'admin')
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 4,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        $permissions = Permission::where('action', 'create')
                                 ->where(function ($query) {
                                     $query->where('resource', 'task')
                                           ->orWhere('resource', 'discussion');
                                 })
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 4,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }

        /**
         * Default Permission Settings for Guest role.
         * */
        $permissions = Permission::where('action', 'view')
                                 ->where('resource', '!=', 'team')
                                 ->where('resource', '!=', 'office')
                                 ->where('resource', '!=', 'admin')
                                 ->get();
        foreach ($permissions->toArray() as $permission) {
            PermissionSetting::insert([
                [
                    'role_id'       => 5,
                    'permission_id' => $permission['id'],
                    'group_related' => $permission['group_related'],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ],
            ]);
        }
    }
}
