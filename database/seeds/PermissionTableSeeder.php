<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()['cache']->forget('spatie.permission.cache');

        Permission::create(['name' => 'create project']);
        Permission::create(['name' => 'view projects']);
        Permission::create(['name' => 'edit project']);
        Permission::create(['name' => 'delete project']);
        Permission::create(['name' => 'create team']);
        Permission::create(['name' => 'view teams']);
        Permission::create(['name' => 'edit team']);
        Permission::create(['name' => 'delete team']);
        Permission::create(['name' => 'create office']);
        Permission::create(['name' => 'view offices']);
        Permission::create(['name' => 'edit office']);
        Permission::create(['name' => 'delete office']);
        Permission::create(['name' => 'invite users']);
        Permission::create(['name' => 'create role']);
        Permission::create(['name' => 'delete role']);
        Permission::create(['name' => 'view permissions']);
        Permission::create(['name' => 'assign permission']);
        Permission::create(['name' => 'revoke permission']);
        Permission::create(['name' => 'view admin page']);
    }
}
