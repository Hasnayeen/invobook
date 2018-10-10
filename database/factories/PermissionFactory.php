<?php

use Spatie\Permission\Models\Permission;

$factory->define(Permission::class, function (Faker\Generator $faker) {
    return [
        'name'          => $faker->word,
        'guard_name'    => 'web',
    ];
});
