<?php

use Carbon\Carbon;

$factory->define(App\TaskManager\Models\Task::class, function (Faker\Generator $faker) {
    $now = Carbon::now();
    $taskable_type = $faker->randomElement(['office', 'team', 'project']);
    $taskable_id = null;
    switch ($taskable_type) {
        case 'office':
            $taskable_id = factory(App\Office\Models\Office::class)->create()->id;

            break;
        case 'team':
            $taskable_id = factory(App\Team\Models\Team::class)->create()->id;

            break;
        case 'project':
            $taskable_id = factory(App\Project\Models\Project::class)->create()->id;

            break;
        default:
            throw new Exception('Wrong Taskable type');
    }

    return [
        'name'          => $faker->sentence(6, true),
        'assigned_to'   => factory(App\Base\Models\User::class)->create()->id,
        'notes'         => $faker->sentence(20, true),
        'due_on'        => $faker->dateTimeBetween('now', '+5 years')->format('Y-m-d'),
        'related_to'    => null,
        'created_by'    => factory(App\Base\Models\User::class)->create()->id,
        'taskable_type' => $taskable_type,
        'taskable_id'   => $taskable_id,
        'status_id'     => factory(App\Base\Models\Status::class)->create()->id,
        'created_at'    => $now,
        'updated_at'    => $now,
    ];
});
