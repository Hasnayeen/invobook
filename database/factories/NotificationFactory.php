<?php

use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(App\Base\Models\Notification::class, function (Faker $faker) {
    return [
        'id'                => $faker->unique()->word(10),
        'type'              => $faker->word(10),
        'notifiable_type'   => 'user',
        'notifiable_id'     => factory(\App\Base\Models\User::class)->create()->id,
        'read_at'           => null,
        'group_type'        => 'project',
        'group_id'          => 1,
        'data'              => '{"subject":{"id":1,"name":"Admin","username":"admin","avatar":"storage\/avatars\/admin.png"},"action":"created new task","object_type":"task","object_name":"New task","object_id":18,"url":"http:\/\/localhost\/teams\/3?tool=tasks&id=18"}',
        'created_at'        => Carbon::now()->subDay(),
    ];
});
