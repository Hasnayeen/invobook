<?php

use Carbon\Carbon;
use App\Base\Models\User;
use App\Office\Models\Office;
use Illuminate\Database\Seeder;
use App\Authorization\Authorization;

class HeadquarterOfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::first();
        DB::table('offices')->insert([
            'name'        => 'Headquarter',
            'description' => 'Central office',
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),
            'owner_id'    => $user->id,
        ]);
        $office = Office::where('name', 'Headquarter')->first();
        (new Authorization($user))->setupDefaultPermissions($office);
        $user->offices()->attach($office->id);
    }
}
