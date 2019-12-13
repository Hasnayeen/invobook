<?php

$factory->define(App\Base\Models\Status::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->name,
        'color' => $faker->hexColor,
    ];
});
