<?php

$factory->define(App\Core\Models\Status::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->name,
        'color' => $faker->hexColor,
    ];
});
