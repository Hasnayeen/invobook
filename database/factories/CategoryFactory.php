<?php

use Faker\Generator as Faker;

$factory->define(\App\Core\Models\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
