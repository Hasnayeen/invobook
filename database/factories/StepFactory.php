<?php

// @var $factory \Illuminate\Database\Eloquent\Factory

use App\Base\Models\Step;
use Faker\Generator as Faker;
use App\TaskManager\Models\Task;

$factory->define(Step::class, function (Faker $faker) {
    return [
        'description' => $faker->sentence(5),
        'unknown'     => $faker->boolean(),
        'done'        => false,
        'task_id'     => factory(Task::class)->create()->id,
    ];
});
