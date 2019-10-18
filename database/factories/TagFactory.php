<?php

use Faker\Generator as Faker;

$factory->define(App\Core\Models\Tag::class, function (Faker $faker) {
    return [
        'label' => $faker->unique()->word(),
    ];
});
