<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Core\Models\Step;
use App\Core\Models\Task;
use Faker\Generator as Faker;

$factory->define(Step::class, function (Faker $faker) {
    return [
        'description' => $faker->sentence(5),
        'unknown'     => $faker->boolean(),
        'done'        => false,
        'task_id'     => factory(Task::class)->create()->id,
    ];
});
