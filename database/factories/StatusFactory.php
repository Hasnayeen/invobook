<?php

$factory->define(App\Models\Status::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->name,
        'color' => $faker->hexColor,
    ];
});
