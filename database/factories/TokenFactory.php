<?php

use App\Base\Models\Role;
use App\Base\Models\Token;
use Faker\Generator as Faker;

$factory->define(Token::class, function (Faker $faker) {
    $role = Role::first();

    return [
        'token'   => encrypt(3),
        'email'   => $faker->unique()->safeEmail,
        'role_id' => $faker->numberBetween(1, 5),
    ];
});
