<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Models\Office::class, function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->word,
        'slug'        => $faker->slug(1, false),
        'description' => $faker->paragraph,
        'created_at'  => $now,
        'updated_at'  => $now,
    ];
});
