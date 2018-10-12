<?php

use Carbon\Carbon;
use App\Models\User;
use App\Models\Office;
use Illuminate\Database\Seeder;

class HeadquarterOfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offices')->insert([
            'name'        => 'Headquarter',
            'description' => 'Central office',
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),
            'owner_id'    => 1,
        ]);
        $office = Office::where('name', 'Headquarter')->first();
        $user = User::find(1);
        $user->offices()->attach($office->id);
        $permission = Permission::create(['name' => 'view office->' . $office->id]);
        $user->givePermissionTo($permission);
    }
}
