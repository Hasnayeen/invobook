<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Core\Models\Team::class, function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->word,
        'description' => $faker->sentence,
        'created_at'  => $now,
        'updated_at'  => $now,
        'owner_id'    => factory(App\Core\Models\User::class)->create()->id,
    ];
});

$factory->defineAs(App\Core\Models\Team::class, 'withOffice', function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->word,
        'description' => $faker->sentence,
        'office_id'   => factory(App\Core\Models\Office::class)->create()->id,
        'created_at'  => $now,
        'updated_at'  => $now,
        'owner_id'    => factory(App\Core\Models\User::class)->create()->id,
    ];
});
