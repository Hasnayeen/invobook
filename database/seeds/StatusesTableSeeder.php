<?php

use App\Core\Models\Status;
use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            'name'  => 'To Do',
            'color' => '#2b6cb0',
        ]);
        Status::create([
            'name'  => 'In Progress',
            'color' => '#6b46c1',
        ]);
        Status::create([
            'name'  => 'In Review',
            'color' => '#b83280',
        ]);
        Status::create([
            'name'  => 'Completed',
            'color' => '#2c7a7b',
        ]);
        Status::create([
            'name'  => 'Canceled',
            'color' => '#c53030',
        ]);
    }
}
