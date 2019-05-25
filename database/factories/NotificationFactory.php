<?php

use Faker\Generator as Faker;

$factory->define(App\Core\Models\Notification::class, function (Faker $faker) {
    return [
        'id'                => $faker->unique()->word(10),
        'type'              => $faker->word(10),
        'notifiable_type'   => 'user',
        'notifiable_id'     => factory(\App\Core\Models\User::class)->create()->id,
        'read_at'           => null,
        'data'              => '{"type":"project","name":"Goodwork","adder":{"id":2,"name":"Guest","username":"guest","bio":null,"designation":null,"avatar":"storage\/avatars\/guest.png","email":"guest@example.com","active":1,"timezone":null,"created_at":"2018-10-11 08:51:42","updated_at":"2018-10-11 10:59:42"},"added":{"id":1,"name":"Admin","username":"admin","bio":null,"designation":null,"avatar":"storage\/avatars\/admin.png","email":"admin@example.com","active":1,"timezone":null,"created_at":"2018-10-11 08:51:41","updated_at":"2018-10-11 10:57:07"}}',
    ];
});
