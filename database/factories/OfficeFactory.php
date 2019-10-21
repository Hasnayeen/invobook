<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Office\Models\Office::class, function (Faker\Generator $faker) {
    $now = Carbon::now();

    return [
        'name'        => $faker->word,
        'description' => $faker->sentence,
        'created_at'  => $now,
        'updated_at'  => $now,
        'owner_id'    => factory(App\Base\Models\User::class)->create()->id,
    ];
});
