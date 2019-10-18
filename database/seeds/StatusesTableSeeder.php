<?php

use App\Base\Models\Status;
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
            'color' => '#90cdf4',
        ]);
        Status::create([
            'name'  => 'In Progress',
            'color' => '#d6bcfa',
        ]);
        Status::create([
            'name'  => 'In Review',
            'color' => '#fbd38d',
        ]);
        Status::create([
            'name'  => 'Completed',
            'color' => '#9ae6b4',
        ]);
        Status::create([
            'name'  => 'Discarded',
            'color' => '#feb2b2',
        ]);
    }
}
