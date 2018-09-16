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

        Permission::create(['name' => 'view projects']);
        Permission::create(['name' => 'edit projects']);
        Permission::create(['name' => 'delete projects']);
        Permission::create(['name' => 'view teams']);
        Permission::create(['name' => 'edit teams']);
        Permission::create(['name' => 'delete teams']);
        Permission::create(['name' => 'view offices']);
        Permission::create(['name' => 'edit offices']);
        Permission::create(['name' => 'delete offices']);
        Permission::create(['name' => 'invite users']);
        Permission::create(['name' => 'create role']);
        Permission::create(['name' => 'delete role']);
        Permission::create(['name' => 'view permissions']);
        Permission::create(['name' => 'assign permission']);
        Permission::create(['name' => 'revoke permission']);
        Permission::create(['name' => 'view admin page']);
    }
}
