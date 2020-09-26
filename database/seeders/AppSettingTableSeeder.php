<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Base\Models\AppSetting;
use Illuminate\Database\Seeder;

class AppSettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        AppSetting::insert([
            [
                'resource'      => 'project',
                'status'        => true,
                'created_at'    => $now,
                'updated_at'    => $now,
            ],
            [
                'resource'      => 'team',
                'status'        => true,
                'created_at'    => $now,
                'updated_at'    => $now,
            ],
            [
                'resource'      => 'office',
                'status'        => true,
                'created_at'    => $now,
                'updated_at'    => $now,
            ],
            [
                'resource'      => 'direct-message',
                'status'        => true,
                'created_at'    => $now,
                'updated_at'    => $now,
            ],
        ]);
    }
}
