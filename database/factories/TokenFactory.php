<?php

use App\Models\Token;
use Faker\Generator as Faker;

$factory->define(Token::class, function (Faker $faker) {
    return [
        'token' => hash_hmac('sha256', str_random('40'), env('APP_KEY')),
        'email' => $faker->safeEmail,
    ];
});
