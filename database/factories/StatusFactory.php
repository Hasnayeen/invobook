<?php

$factory->define(App\TaskManager\Models\Status::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->name,
        'color' => $faker->hexColor,
    ];
});
