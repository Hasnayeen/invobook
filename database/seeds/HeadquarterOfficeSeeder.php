<?php

use Carbon\Carbon;
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
            'slug'        => 'headquarter',
            'description' => 'Central office',
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),
            'owner_id'    => 1,
        ]);
        $office = Office::where('slug', 'headquarter')->first();
        $user = User::find(1);
        $user->offices()->attach($office->id);
    }
}
