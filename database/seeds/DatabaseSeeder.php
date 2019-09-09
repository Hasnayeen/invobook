<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionTableSeeder::class);
        $this->call(RoleTableSeeder::class);
        $this->call(AdminUserSeeder::class);
        $this->call(HeadquarterOfficeSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(StatusesTableSeeder::class);
        $this->call(ServicesTableSeeder::class);
        $this->call(PermissionSettingsTableSeeder::class);
        $this->call(RoleHasPermissionTableSeeder::class);
    }
}
