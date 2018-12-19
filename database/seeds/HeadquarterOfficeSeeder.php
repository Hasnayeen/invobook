<?php

use Carbon\Carbon;
use App\Models\User;
use App\Models\Office;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

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
        $user->offices()->attach($office->id);
        $user->givePermissionTo([
            Permission::create(['name' => 'view office->' . $office->id]),
            Permission::create(['name' => 'create discussion.office->' . $office->id]),
            Permission::create(['name' => 'create task.office->' . $office->id]),
        ]);
        $office->huntable()->create([
            'name'        => $office->name,
            'description' => $office->description,
        ]);
    }
}
