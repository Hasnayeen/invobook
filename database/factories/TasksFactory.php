<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use Carbon\Carbon;

$factory->define(App\Models\Task::class, function (Faker\Generator $faker) {
    $now = Carbon::now();
    $taskable_type = $faker->randomElement(['office', 'team', 'project']);
    $taskable_id = null;
    switch ($taskable_type) {
        case 'office':
            $taskable_id = factory(App\Models\Office::class)->create()->id;
            break;
        case 'team':
            $taskable_id = factory(App\Models\Team::class)->create()->id;
            break;
        case 'project':
            $taskable_id = factory(App\Models\Project::class)->create()->id;
            break;
        default:
            throw new Exception('Wrong Taskable type');
    }

    return [
        'title'         => $faker->sentence(6, true),
        'assigned_to'   => factory(App\Models\User::class)->create()->id,
        'notes'         => $faker->sentence(20, true),
        'due_on'        => $faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
        'taskable_type' => $taskable_type,
        'taskable_id'   => $taskable_id,
        'created_at'    => $now,
        'updated_at'    => $now,
    ];
});
