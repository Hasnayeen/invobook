<?php

use App\Base\Models\Role;
use App\Base\Models\Token;
use Faker\Generator as Faker;

$factory->define(Token::class, function (Faker $faker) {
    $role = Role::first();

    return [
        'token'   => random_bytes(10),
        'email'   => $faker->safeEmail,
        'role_id' => $faker->numberBetween(1, 5),
    ];
});
