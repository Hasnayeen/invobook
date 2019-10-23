<?php

use Carbon\Carbon;
use App\Base\Models\User;
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
        User::create([
            'name'       => 'Admin',
            'username'   => 'admin',
            'email'      => 'admin@example.com',
            'active'     => 1,
            'role_id'    => 1,
            'password'   => bcrypt('secret'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        // Guest User
        User::create([
            'name'       => 'Guest',
            'username'   => 'guest',
            'email'      => 'guest@example.com',
            'active'     => 1,
            'role_id'    => 5,
            'password'   => bcrypt('guestpass'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
