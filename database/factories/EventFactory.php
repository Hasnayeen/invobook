<?php

use Faker\Generator as Faker;

$factory->define(\App\Base\Models\Event::class, function (Faker $faker) {
    return [
        'name'           => $faker->name,
        'description'    => $faker->sentence,
        'time'           => $faker->text,
        'created_by'     => 1,
        'eventable_type' => $faker->text,
        'eventable_id'   => 1,
    ];
});
