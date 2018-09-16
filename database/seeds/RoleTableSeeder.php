<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()['cache']->forget('spatie.permission.cache');

        Role::create(['name' => 'owner', 'deletable' => false]);
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'member']);
        Role::create(['name' => 'client']);
        Role::create(['name' => 'guest']);
    }
}
