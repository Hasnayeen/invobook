<?php

// @var $factory \Illuminate\Database\Eloquent\Factory

use Faker\Generator as Faker;
use App\Base\Models\DirectMessage;

$factory->define(DirectMessage::class, function (Faker $faker) {
    return [
        'body'        => $faker->sentence(20, true),
        'sender_id'   => factory(App\Base\Models\User::class)->create()->id,
        'receiver_id' => factory(App\Base\Models\User::class)->create()->id,
    ];
});
