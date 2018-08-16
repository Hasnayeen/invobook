<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'       => 'Admin',
            'username'   => 'admin',
            'email'      => 'admin@example.com',
            'role'       => 2,
            'active'     => 1,
            'password'   => bcrypt('secret'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
