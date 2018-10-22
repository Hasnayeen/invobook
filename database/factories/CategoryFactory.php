<?php
echo "user";
use Faker\Generator as Faker;

$factory->define(\App\Models\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
    ];
});
