<?php

use Faker\Generator as Faker;

$factory->define(App\Base\Models\Comment::class, function (Faker $faker) {
    $commentable_type = $faker->randomElement(['discussion', 'task']);
    $commentable_id = null;
    switch ($commentable_type) {
        case 'discussion':
            $commentable_id = factory(App\Discussion\Models\Discussion::class)->create()->id;

            break;
        case 'task':
            $commentable_id = factory(App\TaskManager\Models\Task::class)->create()->id;

            break;
        default:
            throw new Exception('Wrong commentable type');
    }

    return [
        'body'             => $faker->sentence(6, true),
        'user_id'          => factory(App\Base\Models\User::class)->create()->id,
        'commentable_type' => $commentable_type,
        'commentable_id'   => $commentable_id,
    ];
});
