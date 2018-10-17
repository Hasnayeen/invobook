<?php

use App\Models\Token;
use Faker\Generator as Faker;
use Spatie\Permission\Models\Role;

$factory->define(Token::class, function (Faker $faker) {
    $role = Role::first();

    return [
        'token' => encrypt($role->id),
        'email' => $faker->safeEmail,
    ];
});
