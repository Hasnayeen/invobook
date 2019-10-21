<?php

use Faker\Generator as Faker;

$factory->define(App\Base\Models\Message::class, function (Faker $faker) {
    $messageable_type = $faker->randomElement(['office', 'team', 'project']);
    $messageable_id = null;
    switch ($messageable_type) {
        case 'office':
            $messageable_id = factory(App\Office\Models\Office::class)->create()->id;

            break;
        case 'team':
            $messageable_id = factory(App\Team\Models\Team::class)->create()->id;

            break;
        case 'project':
            $messageable_id = factory(App\Project\Models\Project::class)->create()->id;

            break;
        default:
            throw new Exception('Wrong Taskable type');
    }

    return [
        'body'             => $faker->sentence(20, true),
        'user_id'          => factory(App\Base\Models\User::class)->create()->id,
        'messageable_type' => $messageable_type,
        'messageable_id'   => $messageable_id,
    ];
});
