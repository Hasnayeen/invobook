<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Models\Project::class, function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->name,
        'slug'        => $faker->slug,
        'description' => $faker->sentence,
        'created_at'  => $now,
        'updated_at'  => $now,
    ];
});

$factory->defineAs(App\Models\Project::class, 'withOfficeAndTeam', function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->name,
        'slug'        => $faker->slug,
        'description' => $faker->sentence,
        'office_id'   => factory(App\Models\Office::class)->create()->id,
        'team_id'     => factory(App\Models\Team::class)->create()->id,
        'created_at'  => $now,
        'updated_at'  => $now,
    ];
});
