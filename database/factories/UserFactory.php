<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;
    $now = Carbon::now();

    return [
        'name'           => $faker->name,
        'username'       => $faker->userName,
        'email'          => $faker->unique()->safeEmail,
        'bio'            => $faker->sentence(20, true),
        'designation'    => '',
        'avatar'         => '',
        'timezone'       => $faker->timezone,
        'week_start'     => $faker->dayOfWeek,
        'active'         => 1,
        'password'       => $password ?: $password = bcrypt('secret'),
        'created_at'     => $now,
        'updated_at'     => $now,
        'remember_token' => str_random(10),
    ];
});
