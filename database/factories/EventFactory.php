<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Event::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'description' => $faker->paragraph,
        'place' => $faker->address,
        'time' => $faker->DateTime(),
        'created_by' => function() {
            return factory('App\Models\User')->create()->id;
        },
        'eventable_type' => 'office',
        'eventable_id' => $faker->numberBetween($min = 1, $max = 100),
    ];
});
