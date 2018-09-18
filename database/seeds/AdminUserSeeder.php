<?php

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name'       => 'Admin',
            'username'   => 'admin',
            'email'      => 'admin@example.com',
            'active'     => 1,
            'password'   => bcrypt('secret'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        $role = Role::where('name', 'owner')->first();
        $user->assignRole($role);
        $permissions = Permission::all();
        $permissions = $permissions->pluck('id')->toArray();
        $role->givePermissionTo($permissions);
    }
}
