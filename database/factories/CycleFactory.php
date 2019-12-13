<?php

use Carbon\Carbon;

$factory->define(App\Base\Models\Cycle::class, function (Faker\Generator $faker) {
    $now = Carbon::now();
    $cyclable_type = $faker->randomElement(['office', 'team', 'project']);
    $cyclable_id = null;
    switch ($cyclable_type) {
        case 'office':
            $cyclable_id = factory(App\Office\Models\Office::class)->create()->id;

            break;
        case 'team':
            $cyclable_id = factory(App\Team\Models\Team::class)->create()->id;

            break;
        case 'project':
            $cyclable_id = factory(App\Project\Models\Project::class)->create()->id;

            break;
        default:
            throw new Exception('Wrong Cycleable type');
    }

    return [
        'name'           => $faker->sentence(6, true),
        'start_date'     => $faker->dateTime('now')->format('Y-m-d'),
        'end_date'       => $faker->dateTimeBetween('now', '+30 days')->format('Y-m-d'),
        'cyclable_type'  => $cyclable_type,
        'cyclable_id'    => $cyclable_id,
        'created_at'     => $now,
        'updated_at'     => $now,
    ];
});
