<?php

use App\Base\Models\Role;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'Owner', 'slug' => 'owner']);
        Role::create(['name' => 'Admin', 'slug' => 'admin']);
        Role::create(['name' => 'Member', 'slug' => 'member']);
        Role::create(['name' => 'Client', 'slug' => 'client']);
        Role::create(['name' => 'Guest', 'slug' => 'guest']);
    }
}
